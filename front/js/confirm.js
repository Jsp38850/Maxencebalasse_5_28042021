//On crée une variable qui rattache l'id container
const container = document.getElementById("container");
/****************************************************/

let PriceTotal = JSON.parse(sessionStorage.getItem("PriceTotal"));
let FisrtNameFrom = JSON.parse(sessionStorage.getItem("Prenom"));
let EmailForm = JSON.parse(sessionStorage.getItem("Mail"));

const ConfirmTitle = document.createElement("h1");
container.appendChild(ConfirmTitle);
ConfirmTitle.className = "col-md-12 text-center mt-5"
ConfirmTitle.textContent =(" Merci pour votre commande ")

const ConfirmParaph = document.createElement("p");
container.appendChild(ConfirmParaph);
ConfirmParaph.className = "col-md-12 text-center mt-5 confirmParaph"
ConfirmParaph.innerHTML = "Bonjour" + " " + "<strong>" + FisrtNameFrom + "</strong>" + " " + "votre commande n°" + " " + "<strong>" + "NUMERO DE COMMANDE" + "</strong>" +  " " +"à bien été enregistrer !"

const ConfirmPrice = document.createElement("p");
container.appendChild(ConfirmPrice);
ConfirmPrice.className = "col-md-12 text-center confirmParaph"
ConfirmPrice.innerHTML = "Le montant total de votre commande est de :" + " " + "<strong>" + PriceTotal +  " " + "€" + "</strong>"

const ConfirmMail = document.createElement("p");
container.appendChild(ConfirmMail);
ConfirmMail.className = "col-md-12 text-center confirmParaph"
ConfirmMail.innerHTML = "Un e-mail de confirmation vous à été envoyer à l'adresse : " + " " +" <strong>" + EmailForm + "</strong>" 

const BtnReturn = document.createElement("a");
container.appendChild(BtnReturn);
BtnReturn.className="col-md-12 text-center confirmParaph  bg-pink py-1 "
BtnReturn.textContent =  "Retour à la boutique" 
BtnReturn.href = "index.html"