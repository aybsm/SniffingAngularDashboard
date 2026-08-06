using System;
using System.Threading;
using System.Threading.Tasks;
using Cronos;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using SniffingWorker.Contracts;
using SniffingWorker.Options;

namespace SniffingWorker
{
    public class Worker : BackgroundService
    {
        private readonly ILogger<Worker> _logger;
        private readonly IServiceScopeFactory _scopeFactory;
        private readonly WorkerOptions _options;
        private readonly CronExpression _cronExpression;

        public Worker(ILogger<Worker> logger, IServiceScopeFactory scopeFactory, IOptions<WorkerOptions> options)
        {
            _logger = logger;
            _scopeFactory = scopeFactory;
            _options = options.Value;
            _cronExpression = CronExpression.Parse(_options.CronExpression);
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            while (!stoppingToken.IsCancellationRequested)
            {
                var next = _cronExpression.GetNextOccurrence(DateTimeOffset.Now, TimeZoneInfo.Local);
                if (next is null)
                {
                    _logger.LogWarning("Cron expression '{CronExpression}' has no future occurrence, stopping worker", _options.CronExpression);
                    break;
                }

                var delay = next.Value - DateTimeOffset.Now;
                if (delay > TimeSpan.Zero)
                {
                    try
                    {
                        await Task.Delay(delay, stoppingToken);
                    }
                    catch (OperationCanceledException)
                    {
                        break;
                    }
                }

                try
                {
                    using var scope = _scopeFactory.CreateScope();
                    var repository = scope.ServiceProvider.GetRequiredService<ISniffingRepository>();

                    await repository.CaptureAsync();
                    _logger.LogInformation("IP_SNIFFING_GET executed successfully at {Time}", DateTimeOffset.Now);
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, "Failed to execute IP_SNIFFING_GET");
                }
            }
        }
    }
}
