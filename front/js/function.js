//Mise a jour du prix total du panier
function UpdateTotal(result, price) {
  let newTotal = result - price / 100;
  resultat = newTotal;
  document.querySelector("#Total").innerHTML = newTotal;
}
