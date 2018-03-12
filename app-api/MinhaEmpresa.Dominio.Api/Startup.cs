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
            // Aqui adicionamos o uso de EF com Postgres, o MyContext é o nosso DbContext criado no projeto de Infra
            services.AddEntityFrameworkNpgsql().AddDbContext<MyContext>();
            
            // Aqui nós rodamos o update-database do migrations sobre o DbContext MyContext
            // Isso pode ser feito manualmente através da linha de comando: dotnet ef database update
            services.BuildServiceProvider().GetService<MyContext>().Database.Migrate();
            
            // Método privado que registra as depêndencia com o framework de injeção já presente no aspnet core
            RegisterDependencyInjection(services);
            
            // Aqui habilitamos o uso do framework Mvc para podermos usar os controllers
            services.AddMvc();
            
            // Aqui adicionamos o CORS, note que o AddCors deve vir depois do AddMvc
            services.AddCors();
        }
        
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            // Configurandoo CORS para aceita tudo, Note que o Cors aqui deve vir antes do Mvc
            app.UseCors(builder => builder
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowAnyOrigin()
                .AllowCredentials()
            );
            
            // Aqui usamos o Mvc com o padrão de rotas
            app.UseMvcWithDefaultRoute();
        }

        private void RegisterDependencyInjection(IServiceCollection services)
        {
            // Registrando depêndencias no framework já presente no asp net core
            // Temos vários ciclos de vida como Scoped Transient e Singleton
            // Note que o MyContext é inserido como Scoped ou seja ele é único do ínicio ao fim da request
            // Quais quer classes que solicitem uma instancia dele virá a mesma instancia para atender toda a request
            // Porém em requests distintas são instancias diferentes, diferente do Singleton
            services.AddScoped<MyContext>();
            
            // Praticamente todos os demais componentes são inseridos como Transient, cada componente que solicita
            // uma instancia dele uma nova instancia será gerada
            services.AddTransient<IRepositoryBase<Customer>, RepositoryBase<Customer>>();
            services.AddTransient<ICustomerService, CustomerService>();
        }
    }
}
