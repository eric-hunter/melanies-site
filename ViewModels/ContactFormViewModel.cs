

using System.ComponentModel.DataAnnotations;

public class ContactFormViewModel {

    [Required]
    public string Name {get;set;}
    
    public string ServiceRequested {get; set;}

    [EmailAddress]
    public string Email {get;set;}

    [Phone]
    public string Phone {get;set;}
    
    public string ContactPreference {get;set;}

    [StringLength(1000)]
    public string Message {get;set;}
    [Required]
    public string GrecaptchaResponse {get;set;}

}