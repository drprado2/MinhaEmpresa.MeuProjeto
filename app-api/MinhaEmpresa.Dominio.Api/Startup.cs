using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using MinhaEmpresa.Dominio.Domain.Entities;
using MinhaEmpresa.Dominio.Domain.Interfaces;
using MinhaEmpresa.Dominio.Domain.Services;
using MinhaEmpresa.Dominio.Infra.DataBase;
using MinhaEmpresa.Dominio.Infra.DataBase.Contexts;

namespace MinhaEmpresa.Dominio.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddEntityFrameworkNpgsql().AddDbContext<MyContext>();
            services.BuildServiceProvider().GetService<MyContext>().Database.Migrate();
            RegisterDependencyInjection(services);
            services.AddMvc();
        }
        
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseMvcWithDefaultRoute();
        }

        private void RegisterDependencyInjection(IServiceCollection services)
        {
            services.AddScoped<MyContext>();
            services.AddTransient<IRepositoryBase<Customer>, RepositoryBase<Customer>>();
            services.AddTransient<ICustomerService, CustomerService>();
        }
    }
}
