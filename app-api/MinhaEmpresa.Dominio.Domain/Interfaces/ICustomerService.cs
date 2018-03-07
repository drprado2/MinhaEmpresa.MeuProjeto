using System.Collections.Generic;
using System.Threading.Tasks;
using MinhaEmpresa.Dominio.Domain.Dtos;

namespace MinhaEmpresa.Dominio.Domain.Interfaces
{
    public interface ICustomerService
    {
        Task CreateAsync(CreateCustomer request);
        
        Task<IList<CustomerResponse>> GetAsync();
    }
}