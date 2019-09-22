

using System.ComponentModel.DataAnnotations;

public class ContactFormViewModel {

    [Required]
    public string name {get;set;}
    
    public string serviceRequested {get; set;}

    [DataType(DataType.EmailAddress)]
    public string email {get;set;}

    [DataType(DataType.PhoneNumber)]
    public string phone {get;set;}
    
    public string ContactPreference {get;set;}

    [StringLength(1000)]
    public string Message {get;set;}

}