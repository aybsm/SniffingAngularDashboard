using System.Collections.Generic;

namespace SniffingApi.Dtos
{
    public class SniffingLogGridResult
    {
        public IEnumerable<SniffingLogDto> Data { get; set; }
        public int TotalCount { get; set; }
    }
}
