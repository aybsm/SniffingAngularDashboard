using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using SniffingApi.Options;

namespace SniffingApi.Middleware
{
    public class ApiKeyMiddleware
    {
        private const string HeaderName = "X-Api-Key";

        private readonly RequestDelegate _next;

        public ApiKeyMiddleware(RequestDelegate next)
            => _next = next;

        public async Task InvokeAsync(HttpContext context, IOptions<ApiKeyOptions> options)
        {
            // Preflight CORS (OPTIONS) nggak bawa custom header, biarin lewat -
            // CORS middleware yang di depan sudah menangani ini.
            if (HttpMethods.IsOptions(context.Request.Method))
            {
                await _next(context);
                return;
            }

            var configuredKey = options.Value.Value;
            var hasHeader = context.Request.Headers.TryGetValue(HeaderName, out var providedKeyValues);

            if (string.IsNullOrEmpty(configuredKey) || !hasHeader || !KeysMatch(providedKeyValues.ToString(), configuredKey))
            {
                context.Response.StatusCode = StatusCodes.Status401Unauthorized;
                context.Response.ContentType = "application/json";
                await context.Response.WriteAsync("{\"message\":\"API key tidak valid atau tidak ada.\"}");
                return;
            }

            await _next(context);
        }

        private static bool KeysMatch(string provided, string configured)
        {
            var providedBytes = Encoding.UTF8.GetBytes(provided);
            var configuredBytes = Encoding.UTF8.GetBytes(configured);

            if (providedBytes.Length != configuredBytes.Length)
                return false;

            return CryptographicOperations.FixedTimeEquals(providedBytes, configuredBytes);
        }
    }
}
