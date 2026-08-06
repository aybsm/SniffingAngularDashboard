using System;
using System.Data;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Polly;
using Polly.Retry;
using SniffingWorker.Contracts;
using SniffingWorker.Options;

namespace SniffingWorker.Repositories
{
    public class SniffingRepository : ISniffingRepository
    {
        private const string StoredProcedureName = "IP_SNIFFING_CAPTURE";

        private readonly IDbConnectionFactory _connectionFactory;
        private readonly WorkerOptions _options;
        private readonly AsyncRetryPolicy _retryPolicy;

        public SniffingRepository(IDbConnectionFactory connectionFactory, IOptions<WorkerOptions> options, ILogger<SniffingRepository> logger)
        {
            _connectionFactory = connectionFactory;
            _options = options.Value;
            _retryPolicy = Policy
                .Handle<SqlException>()
                .WaitAndRetryAsync(
                    _options.RetryCount,
                    attempt => TimeSpan.FromSeconds(Math.Pow(_options.RetryBaseDelaySeconds, attempt)),
                    onRetry: (ex, delay, attempt, _) =>
                        logger.LogWarning(ex, "Retry {Attempt}/{RetryCount} for {StoredProcedure} in {Delay}s", attempt, _options.RetryCount, StoredProcedureName, delay.TotalSeconds));
        }

        public Task CaptureAsync()
            => _retryPolicy.ExecuteAsync(async () =>
            {
                using IDbConnection connection = _connectionFactory.CreateConnection();
                await connection.ExecuteAsync(
                    StoredProcedureName,
                    commandType: CommandType.StoredProcedure,
                    commandTimeout: _options.CommandTimeoutSeconds);
            });
    }
}
