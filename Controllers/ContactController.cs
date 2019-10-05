
using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using melanies_site.Utilities;


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

                Email.Send(email, email, password, "TEST", "test");
            }
            else 
            {
                return BadRequest();
            }

            return Ok();
        }

    }
}

