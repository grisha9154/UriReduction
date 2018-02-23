using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using UriReduction.Data;
using UriReduction.Data.DataBaseConnectionConfig;
using UriReduction.Services.HashGenerators;
using UriReduction.Services.ShortUriDecoders;
using UriReduction.Services.UriShorteners;

namespace UriReduction.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddTransient<IUriShortener, UriShortener>();
            services.AddTransient<IHashGeneretor, HashGenerator>();
            services.AddTransient<IAssociatedUriRepository, AssociatedUriRepository>();
            services.AddTransient<IDataBaseConnectionConfiguration, MsSqlConnectionConfiguration>();
            services.AddTransient<IShortUriDecoder, ShortUriDecoder>();
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseMvc();
        }
    }
}
