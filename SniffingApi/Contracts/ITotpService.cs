namespace SniffingApi.Contracts
{
    public interface ITotpService
    {
        (string Secret, string OtpAuthUri) GenerateNewSecret();
        byte[] GenerateQrCodePng(string otpAuthUri);
        bool VerifyCode(string code);
    }
}
