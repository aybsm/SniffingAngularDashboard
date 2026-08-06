using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SniffingApi.Contracts;
using SniffingApi.Dtos;

namespace SniffingApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SniffingLogController : ControllerBase
    {
        private readonly ISniffingLogRepository _repository;
        private readonly ITotpService _totpService;
        private readonly ILogger<SniffingLogController> _logger;

        public SniffingLogController(ISniffingLogRepository repository, ITotpService totpService, ILogger<SniffingLogController> logger)
        {
            _repository = repository;
            _totpService = totpService;
            _logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult<SniffingLogGridResult>> GetGrid([FromQuery] SniffingLogGridQuery query)
            => Ok(await _repository.GetGridAsync(query));

        [HttpGet("top-offenders")]
        public async Task<ActionResult> GetTopOffenders([FromQuery] TopOffendersQuery query)
            => Ok(await _repository.GetTopOffendersAsync(query));

        [HttpPost("{procedureId:int}/recompile")]
        public async Task<ActionResult> Recompile(int procedureId, [FromQuery] string totpCode)
        {
            if (!_totpService.VerifyCode(totpCode))
            {
                _logger.LogWarning("Recompile ditolak: kode TOTP salah/kosong untuk ProcedureID {ProcedureID}", procedureId);
                return Unauthorized(new { message = "Kode verifikasi salah atau kadaluarsa." });
            }

            var resolvedName = await _repository.RecompileAsync(procedureId);
            if (resolvedName is null)
            {
                return NotFound(new { message = $"Procedure dengan ID {procedureId} tidak ditemukan." });
            }

            _logger.LogInformation("Recompile berhasil dijalankan untuk {ProcedureName} (ID {ProcedureID})", resolvedName, procedureId);
            return Ok(new { procedureName = resolvedName, message = "Recompile berhasil dijalankan." });
        }
    }
}
