using Microsoft.Extensions.Options;
using OtpNet;
using QRCoder;
using SniffingApi.Contracts;
using SniffingApi.Options;

namespace SniffingApi.Services
{
    public class TotpService : ITotpService
    {
        private const string Issuer = "SniffingWorker";
        private const string AccountName = "SniffingApi";

        private readonly TotpOptions _options;

        public TotpService(IOptions<TotpOptions> options)
            => _options = options.Value;

        public (string Secret, string OtpAuthUri) GenerateNewSecret()
        {
            var key = KeyGeneration.GenerateRandomKey(20);
            var secret = Base32Encoding.ToString(key);
            var otpAuthUri = $"otpauth://totp/{Issuer}:{AccountName}?secret={secret}&issuer={Issuer}&algorithm=SHA1&digits=6&period=30";
            return (secret, otpAuthUri);
        }

        public byte[] GenerateQrCodePng(string otpAuthUri)
        {
            using var qrGenerator = new QRCodeGenerator();
            using var qrCodeData = qrGenerator.CreateQrCode(otpAuthUri, QRCodeGenerator.ECCLevel.Q);
            var pngQrCode = new PngByteQRCode(qrCodeData);
            return pngQrCode.GetGraphic(10);
        }

        public bool VerifyCode(string code)
        {
            if (string.IsNullOrWhiteSpace(_options.SharedSecret) || string.IsNullOrWhiteSpace(code))
                return false;

            var key = Base32Encoding.ToBytes(_options.SharedSecret);
            var totp = new Totp(key);
            return totp.VerifyTotp(code, out _, new VerificationWindow(previous: 1, future: 1));
        }
    }
}
