using System;

namespace MinhaEmpresa.Dominio.Domain.Dtos
{
    public class CustomerResponse
    {
        public Guid Id { get; set; }
        public string Nome { get; set; }
        public int Idade { get; set; }
        public string Telefone { get; set; }
        public string Endereco { get; set; }
    }
}