

using System;
using Microsoft.Extensions.Logging;

public static class Logging
{


    /* INFORMATINOAL LOGGING 2000s */
    public static void ContactController_LogUserContactFormAttempt(ILogger logger, string userName)
    {
        var eventId = new EventId(2010, "Contact Form Accessed.");
        logger.LogInformation(eventId, string.Format("{0} is attempting to complete the contact form.", userName));
    }

    public static void ContactController_LogUserEmailSuccess(ILogger logger, string userName)
    {
        var eventId = new EventId(2011, "Contact Form Emailed.");
        logger.LogInformation(eventId, string.Format("{0} sent an email of their form.", userName));
    }

    /* WARNING LOGGING */
    public static void ContactController_LogBadContactFormRequest(ILogger logger, bool modelStateIsValid, bool captchaSuccess)
    {
        var eventId = new EventId(3010, "Contact Form Bad Request");
        logger.LogWarning(eventId, "Bad Contact Form Data: ModelStateValid: {0} Grecaptcha {1}", modelStateIsValid, captchaSuccess);
    }

    /* ERROR LOGGING 4000s */
    public static void ContactController_LogGoogleApiResponseException(ILogger logger, Exception e) 
    {
        var eventId = new EventId(4010, "Recaptcha Failed");
        logger.LogError(eventId, e, "An Exception was thrown when validating user CAPTCHA response.");
    }

    public static void ContactController_LogEmailNotificationFailure(ILogger logger, Exception e)
    {
        var eventId = new EventId(4011, "Contact Form Email Failed");
        logger.LogError(eventId, e, "An Exception was thrown when sending the email of contact form informaiton.");
    }

}