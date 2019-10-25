using Microsoft.AspNetCore.Builder; 
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace melanies_site
{
    public class Startup
    {
        public IConfiguration Configuration {get;}
        public Startup(IConfiguration configuration, IWebHostEnvironment env) 
        {
            Configuration = configuration;
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", 
                            optional: false, 
                            reloadOnChange: true)
                .AddEnvironmentVariables();

            if (env.EnvironmentName.Equals("Development"))
            {
                builder.AddUserSecrets<Startup>();
            }

        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services, IApplicationBuilder app, IWebHostEnvironment env)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_3_0);
            services.AddSpaStaticFiles(configuration => {
                configuration.RootPath = "ClientApp";
                
                app.UseHttpsRedirection();
                app.UseStaticFiles();
                app.UseSpaStaticFiles();
                app.UseMvc();
                app.UseSpa(spa =>
                {
                    spa.Options.SourcePath = "ClientApp";

                    if (env.EnvironmentName.Equals("Development"))
                    {
                        spa.UseReactDevelopmentServer(npmScript: "start");
                    }
                });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ILoggerFactory loggerFactory, ILogger<Startup> logger)
        {
            if (env.EnvironmentName.Equals("Development"))
            {
                app.UseDeveloperExceptionPage();
                logger.LogInformation("DEVELOPMENT");
            }
            else
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();
            }

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");
            });

        }
    }
}
