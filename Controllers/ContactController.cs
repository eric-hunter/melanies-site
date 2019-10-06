
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
                try 
                {
                    string email = _configuration["ContactFormEmail"];
                    string password = _configuration["ContactFormEmailPassword"];
                    string body = ConstructEmailBody(viewModel);
                    Email.Send(email, email, password, "TEST", body);
                }
                catch(Exception) 
                {
                    return StatusCode(500);
                }
            }
            else 
            {
                return BadRequest();
            }
            return Ok();
        }

        private static readonly string EmailMessageFormat = @"
            <table>
                <tr>
                    <td>Name:</td>
                    <td>{0}</td>
                </tr>
                <tr>
                    <td>Services Needed:</td>
                    <td>{1}</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>{2}</td>
                </tr>
                <tr>
                    <td>Phone:</td>
                    <td>{3}</td>
                </tr>
                <tr>
                    <td>Contact Preference:</td>
                    <td>{4}</td>
                </tr>
                <tr>
                    <td>Message</td>
                    <td>{5}</td>
                </tr>
            </table>
        ";

        public static string ConstructEmailBody(ContactFormViewModel viewModel)
        {
            return String.Format(
                EmailMessageFormat,
                viewModel.Name, 
                viewModel.ServiceRequested, 
                viewModel.Email,
                viewModel.Phone,
                viewModel.ContactPreference,
                viewModel.Message);
        }

    }
}

