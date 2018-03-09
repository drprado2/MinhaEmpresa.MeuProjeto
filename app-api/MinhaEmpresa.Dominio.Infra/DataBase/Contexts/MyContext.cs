using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using MinhaEmpresa.Dominio.Domain.Entities;
using MinhaEmpresa.Dominio.Infra.DataBase.Mappings;

namespace MinhaEmpresa.Dominio.Infra.DataBase.Contexts
{
    public class MyContext : DbContext
    {
        private static IConfiguration config = new ConfigurationBuilder()
            .SetBasePath(AppContext.BaseDirectory)
            .AddJsonFile("ef.config.json")
            .Build();
            
        public MyContext() : base(new DbContextOptionsBuilder<MyContext>()
            .UseNpgsql(config.GetConnectionString("MyConn")).Options)
        {
        }

        public DbSet<Customer> Customers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            new CustomerMapping(modelBuilder);
        }
    }
}