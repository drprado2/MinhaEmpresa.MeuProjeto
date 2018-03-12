using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MinhaEmpresa.Dominio.Domain.Dtos;
using MinhaEmpresa.Dominio.Domain.Interfaces;

namespace MinhaEmpresa.Dominio.Api.Controllers
{
    // Essa rota será o ínicio de todas as rotas desse controller
    // note que devemos não por uma / no fim dessa rota e nem uma / no 
    // início das rotas dos métodos
    [Route("/api/customer")]
    public class CustomerController : Controller
    {
        private readonly ICustomerService _customerService;

        // Uso da injeção já registrada no Startup
        public CustomerController(ICustomerService customerService)
        {
            _customerService = customerService;
        }
        
        // Método Get, uso de async obriga a retornarmos uma Task
        // Utilizando IActionResult que nos permite uso de métodos como Ok
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            // Como estamos trabalhando com I/O no blocking
            // devemos usar o await, e fazer toda nossa cadeia de métodos
            // assíncrona
            var customers = await _customerService.GetAsync();
            // Método Ok podemos utilizar pois retornamos uma IActionResult
            // o Ok retorna um StatusCode 200 e serializada o objeto de parâmetro no 
            // body da response
            return Ok(customers);
        }

        [HttpPost]
        // Note o uso de [FromBody] para indicar que que o objeto vem no body
        // Temos também FromQuery indicando que vem via query string
        // FromUrl indicando que vem na url
        // FromServices indicando que vem de um dos serviços regisrados na Startup
        public async Task<IActionResult> Post([FromBody] CreateCustomer request)
        {
            // A ideia de usar um try catch vem para podermos controlar a resposta
            // por exemplo para trabalharmos com um padrão de objeto de resposta
            try
            {
                await _customerService.CreateAsync(request);
                return Ok("Registro salvo com sucesso");
            }
            catch (Exception error)
            {
                // O método StatusCode é muito interessante possível de ser usado com IActionResult
                // ele retorna uma response com o HttpStatusCode informado como primeiro parâmetro
                // e serializa o segundo parâmetro no Body da Response
                return StatusCode(500, $"Erro ao salvar customer\n erro: {error.Message}");
            }
        }
    }
}
