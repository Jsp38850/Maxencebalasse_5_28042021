function validateForm()  {
     const LastName = document.getElementById("inputLastName").value;
     const FirstName = document.getElementById("inputFisrtName").value;
     const Email = document.getElementById("inputEmail").value;
     const Address = document.getElementById("inputAddress").value;
     const city = document.getElementById("inputCity").value;
     const NumberPostal = document.getElementById("inputPostalCode").value;  

    if(LastName == "") {
        alert("Merci d'ajouter votre Nom");
        Form["LastName"].focus(); // Focus
        return false;
    }

    if(FirstName == "") {
        alert("Merci dajouter votre Prénom");
        Form["FirstName"].focus(); // Focus
        return false;
    }

    if(Email == "") {
        alert("Merci dajouter votre Email");
        Form["Mail"].focus(); // Focus
        return false;
    }

    if(Address == "") {
        alert("Merci dajouter votre Adresse");
        Form["Address"].focus(); // Focus
        return false;
    }

    if(city == "") {
        alert("Merci dajouter votre ville");
       
        Form["City"].focus(); // Focus
        return false;
    }

    if(NumberPostal == "") {
        alert("Merci dajouter votre code postal");
        Form["PostalCode"].focus(); // Focus
        return false;
    }

    sessionStorage.setItem("Prenom", JSON.stringify(FirstName)); 
    sessionStorage.setItem("Mail", JSON.stringify(Email));

    return true;
}