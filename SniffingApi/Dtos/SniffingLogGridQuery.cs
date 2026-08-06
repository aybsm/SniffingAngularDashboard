using System;

namespace SniffingApi.Dtos
{
    public class SniffingLogGridQuery
    {
        public int Skip { get; set; } = 0;
        public int Take { get; set; } = 20;
        public string SortColumn { get; set; } = "CapturedAt";
        public bool SortDescending { get; set; } = true;
        public string ProcedureName { get; set; }
        public DateTime? DateFrom { get; set; }
        public DateTime? DateTo { get; set; }
    }
}
