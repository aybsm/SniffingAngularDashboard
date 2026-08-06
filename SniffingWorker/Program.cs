using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Serilog;
using SniffingWorker.Contracts;
using SniffingWorker.Infrastructure;
using SniffingWorker.Options;
using SniffingWorker.Repositories;

namespace SniffingWorker
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .UseWindowsService(options =>
                {
                    options.ServiceName = "SniffingWorker";
                })
                .UseSerilog((hostContext, loggerConfig)
                    => loggerConfig.ReadFrom.Configuration(hostContext.Configuration))
                .ConfigureServices((hostContext, services) =>
                {
                    services.Configure<WorkerOptions>(hostContext.Configuration.GetSection("Worker"));

                    services.AddSingleton<IDbConnectionFactory, SqlConnectionFactory>();
                    services.AddScoped<ISniffingRepository, SniffingRepository>();

                    services.AddHostedService<Worker>();
                });
    }
}
