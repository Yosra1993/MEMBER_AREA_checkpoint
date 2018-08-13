function alert_error()
{
    var name=document.getElementById("name").value;
    var pseudo=document.getElementById("pseudo").value;
    var email=document.getElementById("email2").value;
    var password=document.getElementById("password").value;
    var password2=document.getElementById("password2").value;
    var checkbox=document.getElementById("box");
    var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

    if ((name=="") || (pseudo=="") || (email=="") || (password=="") || (password2==""))
     {
        alert("Tous les espaces doivent etre remplis!!!")
     }

     else if (!regex.test(email))
    {
        alert("email :" + email + " invalide :( ")
        
    }
    
    else if(!re.test(password))
    {
        
        alert("Le mot de passe a moins de 8 caracteres et doit etre une combinaison de caracteres, de chiffres et au moins une lettre majuscule!!!")
     }

    else if(password!=password2)

    alert("Confirmation de mot de passe est incorrecte")

    else if(checkbox.checked == false)

    alert("les Termes et les conditions doit etre acceptees")

    else
    alert("Saved :)")

}