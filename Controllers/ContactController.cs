
using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using melanies_site.utilities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;


namespace melanies_site.Controllers {

    [Route("api/[controller]")]
    public class ContactController : Controller {

        private readonly IConfiguration _configuration = null;

        public ContactController(IConfiguration configuration) 
        {
            _configuration = configuration;
        }

        [HttpPost("[action]")]
        public ActionResult Contact([FromBody] ContactFormViewModel viewModel)
        {
            if (ModelState.IsValid)
            {
                string email = _configuration["ContactFormEmail"];
                string password = _configuration["ContactFormEmailPassword"];
            }
            else 
            {
                return BadRequest();
            }

            return Ok();
        }

    }
}

