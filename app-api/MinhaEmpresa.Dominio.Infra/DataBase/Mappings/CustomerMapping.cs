using Microsoft.EntityFrameworkCore;
using MinhaEmpresa.Dominio.Domain.Entities;

namespace MinhaEmpresa.Dominio.Infra.DataBase.Mappings
{
    public class CustomerMapping
    {
        public CustomerMapping(ModelBuilder modelBuilder)
        {
            var customerMap = modelBuilder.Entity<Customer>();

            customerMap.ToTable("Customer");

            customerMap.HasKey(x => x.Id);
            customerMap.Property(x => x.Telefone).HasMaxLength(20);
            customerMap.Property(x => x.Nome).IsRequired().HasMaxLength(120);
            customerMap.Property(x => x.Idade);
        }
    }
}