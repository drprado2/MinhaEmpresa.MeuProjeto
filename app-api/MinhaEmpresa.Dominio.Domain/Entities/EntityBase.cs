using System;

namespace MinhaEmpresa.Dominio.Domain.Entities
{
    public abstract class EntityBase
    {
        public EntityBase()
        {
            // Controlamos o Id pela aplicação sem necessidade de um DB
            Id = Guid.NewGuid();
        }
        
        public Guid Id { get; private set; }
    }
}