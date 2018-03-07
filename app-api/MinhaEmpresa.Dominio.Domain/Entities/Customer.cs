using System;

namespace MinhaEmpresa.Dominio.Domain.Entities
{
    public class Customer : EntityBase
    {
        protected Customer()
        {
        }
        
        public Customer(string nome, int idade, string telefone)
        {
            Nome = nome;
            Idade = idade;
            Telefone = telefone;
        }
        
        public string Nome { get; private set; }
        public int Idade { get; private set; }
        public string Telefone { get; private set; }
    }
}