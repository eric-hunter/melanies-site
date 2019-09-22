
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
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

        private readonly string successMessage = "success";
        private readonly string modelStateMessage = "Invalid input.";

        [HttpPost("[action]")]
        public ActionResult Contact(ContactFormViewModel viewModel)
        {
            if (ModelState.IsValid)
            {
                
            }
            else 
            {
                return Content(modelStateMessage);
            }

            return Content(successMessage + _configuration["ContactFormEmail"]);
        }

    }
}

