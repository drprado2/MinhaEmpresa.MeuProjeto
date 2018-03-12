using Microsoft.EntityFrameworkCore;
using MinhaEmpresa.Dominio.Domain.Entities;

namespace MinhaEmpresa.Dominio.Infra.DataBase.Mappings
{
    public class CustomerMapping
    {
        // Eu escolhi fazer uma implementação direto no construtor
        // mas tem várias maneiras de fazer isso, inclusive sem ter uma classe
        // só pro mapeamento, fique a vontade para fazer da sua própria maneira
        public CustomerMapping(ModelBuilder modelBuilder)
        {
            // Aqui acessamos especificamente a configuração da entidade
            // que queremos configurar no caso "Customer"
            var customerMap = modelBuilder.Entity<Customer>();

            // Configuramos o nome da tabela
            customerMap.ToTable("Customer");

            // É importante lembrar que no EF mesmo que não coloquemos
            // uma propriedade aqui ela ainda assim seria mapeada automaticamente
            // pelo EF, para ignotar ela devemos fazer
            // customerMap.Ignore(x => x.prop)
            customerMap.HasKey(x => x.Id);
            customerMap.Property(x => x.Telefone).HasMaxLength(20);
            customerMap.Property(x => x.Nome).IsRequired().HasMaxLength(120);
            customerMap.Property(x => x.Idade);
        }
    }
}