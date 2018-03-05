using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MinhaEmpresa.Dominio.Api.Controllers
{
    [Route("/api/customer")]
    public class CustomerController : Controller
    {
        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Está funcionando a API");
        }
    }
}
