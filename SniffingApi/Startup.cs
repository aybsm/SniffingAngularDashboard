using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using SniffingApi.Contracts;
using SniffingApi.Infrastructure;
using SniffingApi.Middleware;
using SniffingApi.Options;
using SniffingApi.Repositories;
using SniffingApi.Services;

namespace SniffingApi
{
    public class Startup
    {
        private const string DashboardCorsPolicy = "DashboardCors";

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "SniffingApi", Version = "v1" });
            });

            services.AddCors(options =>
            {
                options.AddPolicy(DashboardCorsPolicy, policy =>
                {
                    var allowedOrigins = Configuration.GetSection("Cors:AllowedOrigins").Get<string[]>() ?? System.Array.Empty<string>();
                    policy.WithOrigins(allowedOrigins)
                          .AllowAnyHeader()
                          .AllowAnyMethod();
                });
            });

            services.Configure<TotpOptions>(Configuration.GetSection("Totp"));
            services.Configure<ApiKeyOptions>(Configuration.GetSection("ApiKey"));

            services.AddSingleton<IDbConnectionFactory, SqlConnectionFactory>();
            services.AddScoped<ISniffingLogRepository, SniffingLogRepository>();
            services.AddSingleton<ITotpService, TotpService>();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "SniffingApi v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors(DashboardCorsPolicy);

            app.UseMiddleware<ApiKeyMiddleware>();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
