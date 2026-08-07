using System;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;
using Dapper;
using SniffingApi.Contracts;
using SniffingApi.Dtos;

namespace SniffingApi.Repositories
{
    public class SniffingLogRepository : ISniffingLogRepository
    {
        // Whitelist di sisi API, lapis pertama sebelum request sampai ke SP (SP juga whitelist sendiri di dalam)
        private static readonly HashSet<string> SortableColumns = new HashSet<string>(StringComparer.OrdinalIgnoreCase)
        {
            "CapturedAt",
            "ProcedureName",
            "SchemaName",
            "ExecutionCount",
            "ReadVariancePerc",
            "AvgReadsPerc",
            "TotalLogicalReads",
            "MinCPUTimeMs",
            "MaxCPUTimeMs",
        };

        private const int MaxTake = 200;

        private readonly IDbConnectionFactory _connectionFactory;

        public SniffingLogRepository(IDbConnectionFactory connectionFactory)
            => _connectionFactory = connectionFactory;

        public async Task<SniffingLogGridResult> GetGridAsync(SniffingLogGridQuery query)
        {
            var sortColumn = SortableColumns.Contains(query.SortColumn ?? string.Empty)
                ? query.SortColumn
                : "CapturedAt";
            var take = Math.Clamp(query.Take, 1, MaxTake);
            var skip = Math.Max(query.Skip, 0);

            var parameters = new
            {
                query.ProcedureName,
                query.DateFrom,
                query.DateTo,
                SortColumn = sortColumn,
                query.SortDescending,
                Skip = skip,
                Take = take
            };

            using IDbConnection connection = _connectionFactory.CreateConnection();
            using var multi = await connection.QueryMultipleAsync(
                "IP_SNIFFING_LOG_GET", parameters, commandType: CommandType.StoredProcedure);

            var data = await multi.ReadAsync<SniffingLogDto>();
            var totalCount = await multi.ReadSingleAsync<int>();

            return new SniffingLogGridResult { Data = data, TotalCount = totalCount };
        }

        public async Task<IEnumerable<TopOffenderDto>> GetTopOffendersAsync(TopOffendersQuery query)
        {
            var top = Math.Clamp(query.Top, 1, 100);
            var dateTo = query.DateTo ?? DateTime.Now;
            var dateFrom = query.DateFrom ?? dateTo.AddHours(-24);

            var parameters = new
            {
                Metric = query.Metric.ToString(),
                Top = top,
                DateFrom = dateFrom,
                DateTo = dateTo,
                query.MinExecutionCount
            };

            using IDbConnection connection = _connectionFactory.CreateConnection();
            return await connection.QueryAsync<TopOffenderDto>(
                "IP_SNIFFING_TOP_OFFENDER_GET", parameters, commandType: CommandType.StoredProcedure);
        }

        public async Task<IEnumerable<TrendPointDto>> GetTrendAsync(TrendQuery query)
        {
            var top = Math.Clamp(query.Top, 1, 20);
            var dateTo = query.DateTo ?? DateTime.Now;
            var dateFrom = query.DateFrom ?? dateTo.AddHours(-24);
            var bucketMinutes = Math.Clamp(query.BucketMinutes, 1, 1440);

            var parameters = new
            {
                Metric = query.Metric.ToString(),
                Top = top,
                DateFrom = dateFrom,
                DateTo = dateTo,
                BucketMinutes = bucketMinutes
            };

            using IDbConnection connection = _connectionFactory.CreateConnection();
            return await connection.QueryAsync<TrendPointDto>(
                "IP_SNIFFING_TREND_GET", parameters, commandType: CommandType.StoredProcedure);
        }

        public async Task<string> RecompileAsync(int procedureId)
        {
            using IDbConnection connection = _connectionFactory.CreateConnection();
            return await connection.ExecuteScalarAsync<string>(
                "IP_SNIFFING_RECOMPILE", new { ProcedureID = procedureId }, commandType: CommandType.StoredProcedure);
        }
    }
}
