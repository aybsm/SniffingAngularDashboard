using System;

namespace SniffingApi.Dtos
{
    public class SniffingLogDto
    {
        public long Id { get; set; }
        public DateTime CapturedAt { get; set; }
        public int ProcedureID { get; set; }
        public string ProcedureName { get; set; }
        public string SchemaName { get; set; }
        public long ExecutionCount { get; set; }
        public long MinLogicalReads { get; set; }
        public long MaxLogicalReads { get; set; }
        public long ReadVariance { get; set; }
        public double? ReadVariancePerc { get; set; }
        public long TotalLogicalReads { get; set; }
        public long AvgReads { get; set; }
        public double? AvgReadsPerc { get; set; }
        public long MinCPUTimeMs { get; set; }
        public long MaxCPUTimeMs { get; set; }
    }
}
