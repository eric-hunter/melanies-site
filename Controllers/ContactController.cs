
using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using melanies_site.Utilities;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;

namespace melanies_site.Controllers {

    [Route("api/[controller]")]
    public class ContactController : Controller {

        private readonly IConfiguration _configuration = null;
        private readonly ILogger _logger;

        public ContactController(IConfiguration configuration, ILogger<ContactController> logger) 
        {
            _configuration = configuration;
            _logger = logger;
        }

        [HttpPost("[action]")]
        public async Task<ActionResult> Contact([FromBody] ContactFormViewModel viewModel)
        {
            Grecaptcha.ApiResponse googleResponse = await Grecaptcha.GetGoogleResponseAsync(
                _configuration["grecaptchaSecret"], 
                viewModel.GrecaptchaResponse);

            if (ModelState.IsValid && googleResponse.success)
            {
                try 
                {
                    string email = _configuration["ContactFormEmail"];
                    string password = _configuration["ContactFormEmailPassword"];
                    string body = ConstructEmailBody(viewModel);
                    Email.Send(email, email, password, "Website Contact Form", body);
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

