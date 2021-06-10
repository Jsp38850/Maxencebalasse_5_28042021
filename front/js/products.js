//On récupère l'id de l'URL
const urlParams = new URLSearchParams(window.location.search);
const idProduct = urlParams.get("id");
/****************************************************/

//On crée une variable qui rattache l'id container
const container = document.getElementById("container");
/****************************************************/

//Recupere mon panier au localstorage format JSON
let qtyTotal = JSON.parse(localStorage.getItem("qtyTotal"));

//On appel la fonction
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    // Affiche des produits
    var idProduct = JSON.parse(this.responseText);

    //Construction de la structure HTML
    let div = document.createElement("div");
    container.appendChild(div);
    div.className = "card mb-3 ";

    let div2 = document.createElement("div");
    div.appendChild(div2);
    div2.className = "row g-0 ";

    let div3 = document.createElement("div");
    div2.appendChild(div3);
    div3.className = "col-md-4";

    //Images produit
    let cameraImg = document.createElement("img");
    div3.appendChild(cameraImg);
    cameraImg.className = "h-100 ";
    cameraImg.id = "cameraImg";
    cameraImg.src = idProduct.imageUrl;

    let div4 = document.createElement("div");
    div2.appendChild(div4);
    div4.className = "col-md-8";

    let div5 = document.createElement("div");
    div4.appendChild(div5);
    div5.className = "card-body";

    // Nom du produit
    let cameraName = document.createElement("h5");
    div5.appendChild(cameraName);
    cameraName.className = "card-title text-center";
    cameraName.id = "cameraName";
    cameraName.textContent = idProduct.name;

    // Prix produit
    let cameraPrice = document.createElement("p");
    div5.appendChild(cameraPrice);
    cameraPrice.id = "cameraPrice";
    cameraPrice.classList = "card-text text-center ";
    cameraPrice.textContent = idProduct.price / 100 + " " + "€";

    // Description Produit
    let cameraDescription = document.createElement("span");
    div5.appendChild(cameraDescription);
    cameraDescription.classList = "card-text";
    cameraDescription.id = "cameraDescription";
    cameraDescription.textContent = idProduct.description;

    // Option: //
    let cameraOption = document.createElement("p");
    div5.appendChild(cameraOption);
    cameraOption.classList = "card-text mt-2 ";
    cameraOption.textContent = "Option :" + " ";

    const formOption = document.createElement("select");
    cameraOption.appendChild(formOption);

    const list = idProduct.lenses;

    list.forEach((item) => {
      let cameraOption1 = document.createElement("option");
      formOption.appendChild(cameraOption1);
      cameraOption1.classList = "ml-3 mt-2  col-3 text-dark ";
      cameraOption1.textContent = item;
    });

    // Bouton Ajout panier //
    let cameraBouton = document.createElement("btn");
    div5.appendChild(cameraBouton);
    cameraBouton.classList = "d-block btn m-2 bg-pink text-dark";
    cameraBouton.textContent = "Ajouter au panier";
    cameraBouton.id = "btnpanier";

    //Localstorage

    //Clique Bouton "Ajout au panier"
    const btn = document.querySelector("#btnpanier");
    btn.addEventListener("click", function () {
      let cart = JSON.parse(localStorage.getItem("cart")); //Recupere mon panier au localstorage format JSON
      let exist = false;
      if (!cart && cart == undefined) {
        //Verifie si panier exist sinon tableau vide
        cart = [];
      }
      console.log(cart);
      cart.map((product) => {
        //Parcourt tableau panier et modifie qtd produit si il existe
        if (product._id == idProduct._id) {
          product.qty++;
          exist = true;
        }
      });
      if (!exist) {
        idProduct.qty = 1;
        cart.push(idProduct);
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      numberCart.textContent = "(" + (qtyTotal + 1) + ")";
      alert("Produit ajouté avec succès ");
    });
  }
};

//Nombre de produit dans le panier (Affichage dans le header)
const numberCart = document.createElement("p");
shopping.appendChild(numberCart);
numberCart.textContent = "(" + qtyTotal + ")";
if (qtyTotal == null) {
  qtyTotal = 0;
}

request.open("GET", "http://localhost:3000/api/cameras/" + idProduct);
request.send();
