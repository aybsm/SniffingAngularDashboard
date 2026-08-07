using System;

namespace SniffingApi.Dtos
{
    public class TrendPointDto
    {
        public int ProcedureID { get; set; }
        public string ProcedureName { get; set; }
        public DateTime CapturedAt { get; set; }
        public double? MetricValue { get; set; }
    }
}
