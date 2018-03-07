using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MinhaEmpresa.Dominio.Domain.Dtos;
using MinhaEmpresa.Dominio.Domain.Interfaces;

namespace MinhaEmpresa.Dominio.Api.Controllers
{
    [Route("/api/customer")]
    public class CustomerController : Controller
    {
        private readonly ICustomerService _customerService;

        public CustomerController(ICustomerService customerService)
        {
            _customerService = customerService;
        }
        
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var customers = await _customerService.GetAsync();
            return Ok(customers);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CreateCustomer request)
        {
            try
            {
                await _customerService.CreateAsync(request);
                return Ok("Registro salvo com sucesso");
            }
            catch (Exception error)
            {
                return StatusCode(500, $"Erro ao salvar customer\n erro: {error.Message}");
            }
        }
    }
}
