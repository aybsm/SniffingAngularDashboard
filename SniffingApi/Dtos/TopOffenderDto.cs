using System;

namespace SniffingApi.Dtos
{
    public class TopOffenderDto
    {
        public int ProcedureID { get; set; }
        public string ProcedureName { get; set; }
        public string SchemaName { get; set; }
        public DateTime CapturedAt { get; set; }
        public long ExecutionCount { get; set; }
        public long ReadVariance { get; set; }
        public double? ReadVariancePerc { get; set; }
        public long AvgReads { get; set; }
        public double? AvgReadsPerc { get; set; }
    }
}
