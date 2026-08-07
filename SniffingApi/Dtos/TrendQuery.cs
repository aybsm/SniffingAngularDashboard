using System;

namespace SniffingApi.Dtos
{
    public class TrendQuery
    {
        public TopOffenderMetric Metric { get; set; } = TopOffenderMetric.ReadVariancePerc;
        public int Top { get; set; } = 5;
        public DateTime? DateFrom { get; set; }
        public DateTime? DateTo { get; set; }
        public int BucketMinutes { get; set; } = 15;
    }
}
