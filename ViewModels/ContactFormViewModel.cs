

using System.ComponentModel.DataAnnotations;

public class ContactFormViewModel {

    [Required]
    public string Name {get;set;}
    
    public string ServiceRequested {get; set;}

    [DataType(DataType.EmailAddress)]
    public string Email {get;set;}

    [DataType(DataType.PhoneNumber)]
    public string Phone {get;set;}
    
    public string ContactPreference {get;set;}

    [StringLength(1000)]
    public string Message {get;set;}

}