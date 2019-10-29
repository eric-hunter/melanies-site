using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace melanies_site
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .ConfigureLogging(builder =>
                {
                    builder.ClearProviders();
                    builder.AddDebug();
                    builder.AddConsole();
                })
                .ConfigureAppConfiguration(ConfigConfiguration)
                .UseStartup<Startup>();
            
        static void ConfigConfiguration(WebHostBuilderContext webHostBuilderContext, IConfigurationBuilder configurationBuilder)
        {
            configurationBuilder.SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", false, true)
                .AddEnvironmentVariables();

            var config = configurationBuilder.Build();

            if (webHostBuilderContext.HostingEnvironment.IsDevelopment())
            {
                configurationBuilder.AddUserSecrets<Startup>();
            }
            else if (webHostBuilderContext.HostingEnvironment.IsProduction())
            {
                configurationBuilder.AddAzureKeyVault(
                    $"https://{config["azureKeyVault:vault"]}.vault.azure.net/",
                    config["azureKeyVault:clientId"],
                    config["azureKeyVault:clientSecret"]
                );
            }
        }
    }
}
