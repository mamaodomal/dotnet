using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using server.v1.orcamento.models;

namespace server.api.Controllers.OrcamentoController
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrcamentoController : ControllerBase
    {
        private readonly ILogger<OrcamentoController> _logger;

        public OrcamentoController(ILogger<OrcamentoController> logger)
        {
            _logger = logger;
        }

        /// <summary>
        /// Retorna um orcamento
        /// </summary>
        [HttpGet]
        [Produces("application/json")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Get()
        {
            var orcamento = new OutOrcamento
            {
                titulo = "Orcamento da paula",
                descricao = "esse é um teste de descricao"
            };
            if (orcamento != null)
            {
                return Ok(orcamento);
            }
            else
            {
                return NotFound();
            }
        }
    }
}