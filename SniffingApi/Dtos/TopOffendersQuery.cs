using System;

namespace SniffingApi.Dtos
{
    public class TopOffendersQuery
    {
        public TopOffenderMetric Metric { get; set; } = TopOffenderMetric.ReadVariancePerc;
        public int Top { get; set; } = 10;
        public DateTime? DateFrom { get; set; }
        public DateTime? DateTo { get; set; }
        public long MinExecutionCount { get; set; } = 0;
    }
}
