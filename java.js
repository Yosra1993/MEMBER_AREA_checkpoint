function verifier_email()
{
    var email=document.getElementById("email").value;
    var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

     if (!regex.test(email))
    {
        alert(email + " is not valid :( ")
        
    }
    
    else
    alert("Bien enregistrer ! ")

}