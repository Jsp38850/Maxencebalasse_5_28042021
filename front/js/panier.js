//Recuperation du panier au format JSON
let cart = JSON.parse(localStorage.getItem("cart"));
//************************************************//

//Initialisation des Variables
let resultat = 0;
let qtyTotal = 0;
//************************************//

//Bouton vider le panier

const delCart = document.createElement("button");
container.appendChild(delCart);
delCart.className = "mb-2 col-md-2   border bg-pink rounded  ";
delCart.textContent = "Vider le panier";
delCart.addEventListener("click", function () {
  if (confirm("Voulez-vous vider la totalité de votre panier ?")) {
    // Clic sur OK
    localStorage.setItem("cart" , "[]");
    localStorage.removeItem("qtyTotal");

    container.innerHTML = "";
}

});

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
  img.id = "imgcart";
  divimg.appendChild(img);
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
  cameraPrice.textContent = product.price / 100 + " " + "€";

  //div qtd
  let divqty = document.createElement("div");
  row.appendChild(divqty);
  divqty.className = "col-md-2 mt-4";

  //quantiter produit
  let qty = document.createElement("p");
  divqty.appendChild(qty);
  qty.className = "";
  qty.textContent = product.qty;

  //Bouton supprimer
  const btndelete = document.createElement("a");
  row.appendChild(btndelete);
  btndelete.className = "col-md-1 mt-4 far fa-times-circle";

  //Function bouton supprimer
  btndelete.addEventListener("click", function () {
    //Clique sur l'icone de la croix

    cart.filter((item) => {
      if (item._id == product._id) {
        product.qty--;
        qtyTotal--;
        console.log(product.qty);
        alert("Produit supprimer avec succés ");
      }
      if (item._id == product._id && product.qty == 0) {
        localStorage.removeItem("cart");
        alert("Produit arriver a zero");
      }

      numberCart.textContent = "(" + qtyTotal + ")";
    });
  });

  //Somme total du produit multiplie par la quantité
  sum = (product.qty * product.price) / 100;

  //Resultat de la somme total
  resultat += sum;

  //Qty total
  qtyTotal += product.qty;

  
});

//**********Fin de la boucle produit**************//

//Nombre de produit dans le panier (Affichage dans le header)
const numberCart = document.createElement("p");
shopping.appendChild(numberCart);
numberCart.textContent = "(" + qtyTotal + ")";
if (qtyTotal == null) {
   qtyTotal = 0;
}
localStorage.setItem("qtyTotal", JSON.stringify(qtyTotal));


//Ajout du Prix total au SessionStorage
const PriceTotal = resultat;
sessionStorage.setItem("PriceTotal", JSON.stringify(PriceTotal));

//Prix Total
let total = document.createElement("div");
container.appendChild(total);
total.className = "row container border border-dark  mt-3 text-center";

let titleTotal = document.createElement("p");
total.appendChild(titleTotal);
titleTotal.className = "col-12 text-right font-weight-bold total";
titleTotal.textContent = "Total" + "" + ":" + " " + resultat + " " + "€";



