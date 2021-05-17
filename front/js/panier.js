//Appel du localstorage
var img = localStorage.getItem("Img", img);
var price = localStorage.getItem("Prix", price);
var nom = localStorage.getItem("Name", nom);
var option = localStorage.getItem("Option", option);


// Mise en forme Liste produit
let row = document.createElement("div");
container.appendChild(row);
row.className = "row container border border-dark  text-center";

let divtitle = document.createElement("div");
row.appendChild(divtitle);
divtitle.className = "col-md-3 mt-3";

// Nom du produit //
let cameraName = document.createElement("p");
divtitle.appendChild(cameraName);
cameraName.className = "text-left";
cameraName.id = "cameraName";
document.getElementById("cameraName").innerHTML = nom;

let divoption= document.createElement("div");
row.appendChild(divoption);
divoption.className = "col-md-3 mt-3";

// Option: //
let cameraOption = document.createElement("p");
divoption.appendChild(cameraOption);
cameraOption.classList = "";
cameraOption.id = "option";
document.getElementById("option").innerHTML = option;


let divprice = document.createElement("div");
row.appendChild(divprice);
divprice.className = "col-md-3 mt-3";

// Prix produit //
let cameraPrice = document.createElement("p");
divprice.appendChild(cameraPrice);
cameraPrice.id = "cameraPrice";
cameraPrice.classList = "";
document.getElementById("cameraPrice").innerHTML = price;


