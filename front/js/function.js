//Mise a jour du prix total du panier
function UpdateTotal(result, price) {
  let newTotal = result - price / 100;
  resultat = newTotal;
  document.querySelector("#Total").innerHTML = newTotal;
}
/*************************************/

//Affichage du nombre de produit dans le panier au header
function QtdHeader() {
  let numberCart = document.createElement("p");
  shopping.appendChild(numberCart);
  numberCart.textContent = "(" + qtyTotal + ")";

  if (qtyTotal == null) {
    qtyTotal = 0;
  }
}
/*************************************/
