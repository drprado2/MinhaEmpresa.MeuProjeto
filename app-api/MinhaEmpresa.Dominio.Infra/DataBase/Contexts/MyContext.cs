using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using MinhaEmpresa.Dominio.Domain.Entities;
using MinhaEmpresa.Dominio.Infra.DataBase.Mappings;

namespace MinhaEmpresa.Dominio.Infra.DataBase.Contexts
{
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions<MyContext> options) : base(options)
        {
        }

        public DbSet<Customer> Customers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            new CustomerMapping(modelBuilder);
        }
    }
}