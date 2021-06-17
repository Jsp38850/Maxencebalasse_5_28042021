//On récupère l'id de l'URL
let urlParams = new URLSearchParams(window.location.search);
let idProduct = urlParams.get("id");
/****************************************************/

//On crée une variable qui rattache l'id container
let container = document.getElementById("container");
/****************************************************/

//Recupere mon panier au localstorage format JSON
let qtyTotal = JSON.parse(localStorage.getItem("qtyTotal"));

//On appel la fonction
const request = new XMLHttpRequest();
request.onreadystatechange = function ProductSelect() {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    // Affiche des produits
    const idProduct = JSON.parse(this.responseText);

    //Construction de la structure HTML
    const div = document.createElement("div");
    container.appendChild(div);
    div.className = "card mb-3 ";

    const div2 = document.createElement("div");
    div.appendChild(div2);
    div2.className = "row g-0 ";

    const div3 = document.createElement("div");
    div2.appendChild(div3);
    div3.className = "col-md-4";

    //Images produit
    const cameraImg = document.createElement("img");
    div3.appendChild(cameraImg);
    cameraImg.className = "h-100 ";
    cameraImg.id = "cameraImg";
    cameraImg.src = idProduct.imageUrl;

    const div4 = document.createElement("div");
    div2.appendChild(div4);
    div4.className = "col-md-8";

    const div5 = document.createElement("div");
    div4.appendChild(div5);
    div5.className = "card-body";

    // Nom du produit
    const cameraName = document.createElement("h5");
    div5.appendChild(cameraName);
    cameraName.className = "card-title text-center";
    cameraName.id = "cameraName";
    cameraName.textContent = idProduct.name;

    // Prix produit
    const cameraPrice = document.createElement("p");
    div5.appendChild(cameraPrice);
    cameraPrice.id = "cameraPrice";
    cameraPrice.classList = "card-text text-center ";
    cameraPrice.textContent = idProduct.price / 100 + " " + "€";

    // Description Produit
    const cameraDescription = document.createElement("span");
    div5.appendChild(cameraDescription);
    cameraDescription.classList = "card-text";
    cameraDescription.id = "cameraDescription";
    cameraDescription.textContent = idProduct.description;

    // Option: //
    const cameraOption = document.createElement("p");
    div5.appendChild(cameraOption);
    cameraOption.classList = "card-text mt-2 ";
    cameraOption.textContent = "Option :" + " ";

    const formOption = document.createElement("select");
    cameraOption.appendChild(formOption);

    const list = idProduct.lenses;

    list.forEach((item) => {
      const cameraOption1 = document.createElement("option");
      formOption.appendChild(cameraOption1);
      cameraOption1.classList = "ml-3 mt-2  col-3 text-dark ";
      cameraOption1.textContent = item;
    });

    // Bouton Ajout panier //
    const cameraBouton = document.createElement("btn");
    div5.appendChild(cameraBouton);
    cameraBouton.classList = "d-block btn m-2 bg-pink text-dark";
    cameraBouton.textContent = "Ajouter au panier";
    cameraBouton.id = "btnpanier";

    //Localstorage

    //Clique Bouton "Ajout au panier"
    const btn = document.querySelector("#btnpanier");
    btn.addEventListener("click", function addProduct() {
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
if (qtyTotal == null) {
  qtyTotal = 0;
}
numberCart.textContent = "(" + qtyTotal + ")";

request.open("GET", "http://localhost:3000/api/cameras/" + idProduct);
request.send();
