

using System.Net;
using System.Net.Mail;

namespace melanies_site.utilities
{
    public static class Email
    {
        public static void Send(string from, string to, string secret, string subject, string body)
        {
            var client = new SmtpClient("smtp.gmail.com", 587);
            client.EnableSsl = true;
            client.Credentials = new NetworkCredential(from, secret);

            var mail = new MailMessage();
            mail.From = new MailAddress(from);
            mail.To.Add(to);
            mail.Subject = subject;
            mail.Body = body;

            client.Send(mail);
        }
    }
}