using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MinhaEmpresa.Dominio.Domain.Entities;
using MinhaEmpresa.Dominio.Domain.Interfaces;
using MinhaEmpresa.Dominio.Infra.DataBase.Contexts;

namespace MinhaEmpresa.Dominio.Infra.DataBase
{
    public class RepositoryBase<T> : IRepositoryBase<T> where T : EntityBase
    {
        private readonly MyContext _context;
        
        public RepositoryBase(MyContext context)
        {
            _context = context;
        }
        
        public async Task CreateAsync(T entity)
        {
            await _context.Set<T>().AddAsync(entity);
            await _context.SaveChangesAsync();
        }

        public async Task<IList<T>> GetAllAsync()
        {
            return await _context.Set<T>().ToListAsync();
        }
    }
}