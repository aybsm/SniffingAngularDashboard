using System.Collections.Generic;
using System.Threading.Tasks;
using SniffingApi.Dtos;

namespace SniffingApi.Contracts
{
    public interface ISniffingLogRepository
    {
        Task<SniffingLogGridResult> GetGridAsync(SniffingLogGridQuery query);
        Task<IEnumerable<TopOffenderDto>> GetTopOffendersAsync(TopOffendersQuery query);

        /// <summary>Resolve ProcedureID lalu EXEC sp_recompile. Balikin null kalau object nggak ditemukan.</summary>
        Task<string> RecompileAsync(int procedureId);
    }
}
