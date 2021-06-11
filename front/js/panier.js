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
    localStorage.setItem("cart", "[]");
    localStorage.removeItem("qtyTotal");

    container.innerHTML = "";
    container.textContent = "Votre panier est vide";
    titleTotal.textContent = "Total" + " " + ":" + " " + "0" + " " + "€";
  }
});
//********************************************************//

//Création d'une boucle pour les produits du panier
cart.forEach((product) => {
  // Mise en forme Liste produit
  const row = document.createElement("div");
  container.appendChild(row);
  row.className = "row container border border-dark col-md-12  text-center";

  //Div img
  const divimg = document.createElement("div");
  row.appendChild(divimg);
  divimg.className = "col-md-4 ";

  //Image
  const img = document.createElement("img");
  img.id = "imgcart";
  divimg.appendChild(img);
  img.src = product.imageUrl;

  //Div title
  const divTitle = document.createElement("div");
  row.appendChild(divTitle);

  divTitle.className = "col-md-3 mt-4 ";

  // Nom du produit //
  const cameraName = document.createElement("p");
  divTitle.appendChild(cameraName);
  cameraName.className = "";
  cameraName.textContent = product.name;

  //div prix
  const divprice = document.createElement("div");
  row.appendChild(divprice);
  divprice.className = "col-md-2 mt-4";

  // Prix produit //
  const cameraPrice = document.createElement("p");
  divprice.appendChild(cameraPrice);
  cameraPrice.classList = "";
  cameraPrice.textContent = product.price / 100 + " " + "€";

  //div qtd
  const divqty = document.createElement("div");
  row.appendChild(divqty);
  divqty.className = "col-md-2 mt-4";

  //quantiter produit
  const qty = document.createElement("p");
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
    cart.map((item) => {
      if (item._id == product._id) {
        product.qty--;
        qtyTotal--;

        alert("Produit supprimé avec succès");

        numberCart.textContent = "(" + qtyTotal + ")";
        qty.textContent = product.qty;
        if (product.qty == 0) {
          row.innerHTML = "";
          alert("Produit arriver a zero");
        }
        UpdateTotal(resultat, product.price);
      }
    });
    let productList = cart.filter((item) => item.qty > 0);
    localStorage.setItem("cart", JSON.stringify(productList));
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
let PriceTotal = resultat;
localStorage.setItem("PriceTotal", JSON.stringify(PriceTotal));

//Prix Total
const total = document.createElement("div");
TotalSomme.appendChild(total);
total.className = "row container border border-dark  mt-3 text-center";

const titleTotal = document.createElement("p");
total.appendChild(titleTotal);
titleTotal.className = "col-12 text-right font-weight-bold total";
titleTotal.innerHTML = "Total" + " " + ":" + ' <span id="Total">' + resultat + "</span> " + "€";
