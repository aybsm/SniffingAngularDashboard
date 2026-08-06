using System;
using Microsoft.AspNetCore.Mvc;
using SniffingApi.Contracts;

namespace SniffingApi.Controllers
{
    // Endpoint setup ini dipakai SEKALI SAJA saat enroll pertama kali:
    // 1. Panggil GET /api/totp/setup, salin nilai "secret" ke Totp:SharedSecret di appsettings.Production.json, restart app.
    // 2. Scan "qrCodeImageBase64" (atau "otpAuthUri") pakai Google Authenticator / app TOTP apapun.
    // Setelah setup awal selesai, sebaiknya endpoint ini dilepas/dibatasi aksesnya.
    [ApiController]
    [Route("api/[controller]")]
    public class TotpController : ControllerBase
    {
        private readonly ITotpService _totpService;

        public TotpController(ITotpService totpService)
            => _totpService = totpService;

        [HttpGet("setup")]
        public ActionResult GenerateSetup()
        {
            var (secret, otpAuthUri) = _totpService.GenerateNewSecret();
            var qrPng = _totpService.GenerateQrCodePng(otpAuthUri);

            return Ok(new
            {
                secret,
                otpAuthUri,
                qrCodeImageBase64 = Convert.ToBase64String(qrPng)
            });
        }
    }
}
