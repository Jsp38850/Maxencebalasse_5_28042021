//Recupere mon panier au localstorage format JSON
let cart = JSON.parse(localStorage.getItem("cart")); 

//Initialise la Variable resultat à 0
let resultat = 0

//Création d'une boucle pour les produits du panier 
cart.forEach((product) => {

// Mise en forme Liste produit
let row = document.createElement("div");
container.appendChild(row);
row.className = "row container border border-dark col-md-12  text-center";

//Div img
let divimg = document.createElement("div");
row.appendChild(divimg);
divimg.className = "col-md-4 ";

//Image
let img = document.createElement("img");
img.id = "imgcart"
divimg.appendChild(img)
img.src = product.imageUrl;

//Div title
let divTitle = document.createElement("div");
row.appendChild(divTitle);
divTitle.className = "col-md-3 mt-4 ";

// Nom du produit //
let cameraName = document.createElement("p");
divTitle.appendChild(cameraName);
cameraName.className = "";
cameraName.textContent = product.name;

//div prix
let divprice = document.createElement("div");
row.appendChild(divprice);
divprice.className = "col-md-2 mt-4";

// Prix produit //
let cameraPrice = document.createElement("p");
divprice.appendChild(cameraPrice);
cameraPrice.classList = "";
cameraPrice.textContent = product.price/100 + " " +"€"

//div qtd
let divqty = document.createElement("div");
row.appendChild(divqty);
divqty.className = "col-md-2 mt-4";

//quantiter produit
let qty = document.createElement("p");
divqty.appendChild(qty);
qty.className = "";
qty.textContent = product.qty

//Bouton supprimer
let btndelete = document.createElement("btn");
row.appendChild(btndelete);
btndelete.className = "col-md-1 mt-4 far fa-times-circle"
btndelete.id = "btndelete"

//Somme total du produit multiplie par la quantité 
sum = (product.qty * product.price)/100 

//Resultat de la somme total   
resultat += sum ;

});

  //Supprimer un produit du panier
  annulerProduit = (i) =>{
    console.log("Administration : Enlever le produit à l'index " + i);
    //recupérer le array
    userPanier.splice(i, 1); 
    console.log("Administration : " + userPanier);
    //vide le localstorage
    localStorage.clear();
    console.log("Administration : localStorage vidé");
    // mettre à jour le localStorage avec le nouveau panier
    localStorage.setItem('userPanier', JSON.stringify(userPanier));
    console.log("Administration : localStorage mis à jour");
    //relancer la création de l'addition
    window.location.reload();
};






//Prix Total 
let total = document.createElement("div");
container.appendChild(total);
total.className = "row container border border-dark  mt-3 text-center";

let titleTotal = document.createElement("p");
total.appendChild(titleTotal);
titleTotal.className = "col-12 text-right font-weight-bold total"
titleTotal.textContent = "Total" + "" + ":" + " " + resultat + " " + "€";


 