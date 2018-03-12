using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using MinhaEmpresa.Dominio.Domain.Entities;
using MinhaEmpresa.Dominio.Infra.DataBase.Mappings;

namespace MinhaEmpresa.Dominio.Infra.DataBase.Contexts
{
    // Criação do nosso próprio DbContext
    public class MyContext : DbContext
    {
        // Acesso ao arquivo de configurações para podermos isolar
        // toda a parte de infra na camada de Infra sem poluir a API
        // com Migrations, etc
        // Note que para isso funcionar devemos ter as tags Target nos arquivos csproj
        private static IConfiguration config = new ConfigurationBuilder()
            .SetBasePath(AppContext.BaseDirectory)
            // Note que esse nome ef.config.json é opcional foi o nome escolhido para o arquivo de configuração
            .AddJsonFile("ef.config.json")
            .Build();
            
        // Construtor do nosso DbContext, devemos passar um DbContextOptions para
        // a nossa base, para criar essa instancia usamos o builder,
        // passando no generics o nosso DbContext, informamos que usamos
        // o Postgres, e pegamos a string de conexão através do arquivo de config.
        // Poderia ser passada diretamente como uma string
        // Por fim usamos a propriedade Optinos que retorna o nosso 
        // DbContextOptions
        // NOTA: Poderiámos fazer isso direto no Startup do ASP NET Core
        // mas nesse caso os nossos migrations ficariam naquela camada
        // poluindo ela e confundindo as suas responsabilidades
        public MyContext() : base(new DbContextOptionsBuilder<MyContext>()
            // Note que MyConn é o nome da chave do json de configuração que 
            // possui as connections string
            .UseNpgsql(config.GetConnectionString("MyConn")).Options)
        {
        }

        // Usamos os DbSet para criarmos as "Tabelas" do nosso banco
        public DbSet<Customer> Customers { get; set; }

        // Fazermos override nesse método para usarmos o FluentApi para configurar
        // o mapeamento das nossas entidades para com o banco
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Veja a classe a baixo para entender melhor como mapear
            new CustomerMapping(modelBuilder);
        }
    }
}