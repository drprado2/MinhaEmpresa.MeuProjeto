using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MinhaEmpresa.Dominio.Domain.Dtos;
using MinhaEmpresa.Dominio.Domain.Entities;
using MinhaEmpresa.Dominio.Domain.Interfaces;

namespace MinhaEmpresa.Dominio.Domain.Services
{
    public class CustomerService : ICustomerService
    {
        private readonly IRepositoryBase<Customer> _repository;
        
        public CustomerService(IRepositoryBase<Customer> repository)
        {
            _repository = repository;
        }
        
        public async Task CreateAsync(CreateCustomer request)
        {
            var customer = new Customer(request.Nome, request.Idade, request.Telefone, request.Endereco);
            await _repository.CreateAsync(customer);
        }

        public async Task<IList<CustomerResponse>> GetAsync()
        {
            var customers = await _repository.GetAllAsync();
            return customers.Select(x => new CustomerResponse()
            {
                Id = x.Id,
                Idade = x.Idade,
                Nome = x.Nome,
                Telefone = x.Telefone,
                Endereco = x.Endereco
            }).ToList();
        }
    }
}