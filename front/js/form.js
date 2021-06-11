  

//Fonction de validation du formulaire//
function validateForm() {
  const LastName = document.getElementById("inputLastName").value;
  const FirstName = document.getElementById("inputFisrtName").value;
  const Email = document.getElementById("inputEmail").value;
  const Address = document.getElementById("inputAddress").value;
  const city = document.getElementById("inputCity").value;
  const NumberPostal = document.getElementById("inputPostalCode").value;
  
  //Recuperation du panier au format JSON
  let carts = JSON.parse(localStorage.getItem("cart"));

  if (LastName == "") {
    alert("Merci d'ajouter votre Nom");
    Form["LastName"].focus(); // Focus
    return false;
  }

  if (FirstName == "") {
    alert("Merci dajouter votre Prénom");
    Form["FirstName"].focus(); // Focus
    return false;
  }

  if (Email == "") {
    alert("Merci dajouter votre Email");
    Form["Mail"].focus(); // Focus
    return false;
  }

  if (Address == "") {
    alert("Merci dajouter votre Adresse");
    Form["Address"].focus(); // Focus
    return false;
  }

  if (city == "") {
    alert("Merci dajouter votre ville");

    Form["City"].focus(); // Focus
    return false;
  }

  if (NumberPostal == "") {
    alert("Merci dajouter votre code postal");
    Form["PostalCode"].focus(); // Focus
    return false;
  }


  if(!carts || carts == undefined || carts.length == 0){

    alert("Panier vide")
    return false;
  }
  
  
  //*******************************************************//




  //Méthode fetch pour envoyer les données à l'api
  fetch("http://localhost:3000/api/cameras/order", {
    method: "post",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contact: {
        firstName: FirstName,
        lastName: LastName,
        address: Address,
        city: city,
        email: Email,
      },
      products: carts.map((cart) => cart._id),
    }),
  })
    .then((res) => res.json())
    .then((res) => localStorage.setItem("commande", JSON.stringify(res)))
    .catch((e) => console.log(e));
}
