using System;
using System.Reflection;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using NSwag.AspNetCore;
using UriReduction.Data.AssociatedUriRepositories;
using UriReduction.Data.DataBaseConnectionConfig;
using UriReduction.Data.UserRepositories;
using UriReduction.Models;
using UriReduction.Services.AssociatedUriDeleteService;
using UriReduction.Services.HashGenerators;
using UriReduction.Services.ImageUpload;
using UriReduction.Services.ShortUriDecoders;
using UriReduction.Services.ShortUriRequestCounters;
using UriReduction.Services.UriShorteners;
using UriReduction.Services.UserShoertUriStatistics;

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
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.AddIdentity<UserAccount,AccountRole>().AddDefaultTokenProviders();

            services.AddTransient<IUserStore<UserAccount>,UserRepository>();
            services.AddTransient<IRoleStore<AccountRole>, AccountRoleRepository>();

            services.AddTransient<IUserRoleRepository, UserRoleRepository>();
            services.AddTransient<IAssociatedUriDeleteService,AssociatedUriDeleteService>();
            services.AddTransient<IUserShortUriStatistics,UserShortUriStatistics>();
            services.AddTransient<IShortUriRequestCounter, ShortUriRequestCounter>();
            services.AddTransient<IImageUploader,ImageUploader>();
            services.AddTransient<IUriShortener, UriShortener>();
            services.AddTransient<IHashGeneretor, HashGenerator>();
            services.AddTransient<IAssociatedUriRepository, AssociatedUriRepository>();
            services.AddTransient<IUserRepository,UserRepository>();
            services.AddTransient<IDataBaseConnectionConfiguration, MsSqlConnectionConfiguration>();
            services.AddTransient<IShortUriDecoder, ShortUriDecoder>();
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            services.Configure<IdentityOptions>(options =>
            {
                options.Password.RequireDigit = false;
                options.Password.RequiredLength = 3;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;
                options.Password.RequireLowercase = false;
                options.Password.RequiredUniqueChars =0;
            });

            services.AddMvc(config =>{
                    var policy = new AuthorizationPolicyBuilder()
                        .RequireAuthenticatedUser()
                        .Build();
                    config.Filters.Add(new AuthorizeFilter(policy));
                });

            return services.BuildServiceProvider();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseAuthentication();
            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseSwaggerUi(typeof(Startup).GetTypeInfo().Assembly,setting =>
            {
                setting.GeneratorSettings.DefaultPropertyNameHandling = NJsonSchema.PropertyNameHandling.CamelCase;
            });

            app.UseMvc();
        }
    }
}
