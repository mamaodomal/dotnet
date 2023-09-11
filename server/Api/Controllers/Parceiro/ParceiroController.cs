using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using server.v1.parceiro.models;

namespace server.api.controllers.parceiroController
{
    [ApiController]
    [Route("api/[controller]")]
    public class ParceiroController : ControllerBase
    {
        private readonly ILogger<ParceiroController> _logger;

        public ParceiroController(ILogger<ParceiroController> logger)
        {
            _logger = logger;
        }

        /// <summary>
        /// Cria um parceiro
        /// </summary>
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Get([FromBody] InOutParceiro parceiro)
        {
            Console.WriteLine(parceiro.nome);
            Console.WriteLine(parceiro.cnpj);

            return Ok();
        }
    }
}