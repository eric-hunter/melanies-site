

using System.Net;
using System.Net.Mail;

namespace melanies_site.Utilities
{
    public static class Email
    {
        public static void Send(string from, string to, string secret, string subject, string body)
        {
            var client = new SmtpClient("smtp.gmail.com", 587);
            client.EnableSsl = true;
            client.UseDefaultCredentials = false;
            client.Credentials = new NetworkCredential(from, secret);

            var mail = new MailMessage();
            mail.From = new MailAddress(from);
            mail.To.Add(to);
            mail.Subject = subject;
            mail.Body = body;
            mail.IsBodyHtml = true;

            client.Send(mail);
        }
    }
}