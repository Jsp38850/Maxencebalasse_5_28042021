let cart = JSON.parse(localStorage.getItem("cart"));  //Recupere mon panier au localstorage format JSON

cart.forEach((product) => {
    console.log(product);
// Mise en forme Liste produit
let row = document.createElement("div");
container.appendChild(row);
row.className = "row container border border-dark  text-center";

//Div img
let divimg = document.createElement("div");
row.appendChild(divimg);
divimg.className = "col-md-3 ";

//Image
let img = document.createElement("img");
divimg.appendChild(img)
img.src = product.imageUrl;


//Div title
let divtitle = document.createElement("div");
row.appendChild(divtitle);
divtitle.className = "col-md-2  mt-3 ";

// Nom du produit //
let cameraName = document.createElement("p");
divtitle.appendChild(cameraName);
cameraName.className = "";
cameraName.textContent = product.name;

/*
let divoption= document.createElement("div");
row.appendChild(divoption);
divoption.className = "col-md-3 mt-3";

// Option: //
let cameraOption = document.createElement("p");
divoption.appendChild(cameraOption);
cameraOption.classList = "";
cameraOption.id = "option";
document.getElementById("option").innerHTML = option;*/

//div prix
let divprice = document.createElement("div");
row.appendChild(divprice);
divprice.className = "col-md-2 mt-3";

// Prix produit //
let cameraPrice = document.createElement("p");
divprice.appendChild(cameraPrice);
cameraPrice.classList = "";
cameraPrice.textContent = product.price/100 + " " +"€"

//div qtd
let divqty = document.createElement("div");
row.appendChild(divqty);
divqty.className = "col-md-2 mt-3";

//quantiter produit

let qty = document.createElement("p");
divqty.appendChild(qty);
qty.className = "";
qty.textContent = product.qty
});
