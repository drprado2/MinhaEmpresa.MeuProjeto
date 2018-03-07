using System.Collections.Generic;
using System.Threading.Tasks;
using MinhaEmpresa.Dominio.Domain.Entities;

namespace MinhaEmpresa.Dominio.Domain.Interfaces
{
    public interface IRepositoryBase<T> where T: EntityBase
    {
        Task CreateAsync(T entity);

        Task<IList<T>> GetAllAsync();
    }
}