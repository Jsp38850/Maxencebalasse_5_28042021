//On récupère L'id de l'URL
const urlParams = new URLSearchParams(window.location.search);
const idProduct = urlParams.get("id");

//On crée une variable qui appelle l'id container
const container = document.getElementById("container");

//On appel la fonction
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    
    // Affiche des produits
    var idProduct = JSON.parse(this.responseText);

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

    // Avis
    let cameraAvis = document.createElement("p");
    div5.appendChild(cameraAvis);
    cameraAvis.classList = "card-text mt-2 ";
    cameraAvis.textContent = "Avis" + " " + "(" + 0 + ")";

    // Option: //
    let cameraOption = document.createElement("p");
    div5.appendChild(cameraOption);
    cameraOption.classList = "card-text mt-2 ";
    cameraOption.textContent = "Option :";

    const list = idProduct.lenses;
    list.forEach((item) => {
      let cameraOption1 = document.createElement("button");
      cameraOption.appendChild(cameraOption1);
      cameraOption1.classList = "ml-3 mt-2 btn btn-outline-dark col-3 text-dark ";
      cameraOption1.textContent = item;
    });

    // Bouton Ajout panier //
    let cameraBouton = document.createElement("btn");
    div5.appendChild(cameraBouton);
    cameraBouton.classList = "d-block btn m-2 bg-pink text-dark";
    cameraBouton.textContent = "Ajouter au panier";
    cameraBouton.id = "btnpanier";

    //Localstorage

    //Transforme en JSON//
    var img_json = JSON.stringify(cameraImg.src);
    var nom_json = JSON.stringify(cameraName.textContent);
    var option_json = JSON.stringify(cameraOption.textContent);
    var price_json = JSON.stringify(cameraPrice.textContent);

    //Récupère le fichier JSON
    var nom = JSON.parse(nom_json);
    var option = JSON.parse(option_json);
    var price = JSON.parse(price_json);
    var img = JSON.parse(img_json);

    //Clique Bouton "Ajout au panier"
    const btn = document.querySelector("#btnpanier");
    btn.addEventListener("click", function () {
      localStorage.setItem("Prix", price_json);
      localStorage.setItem("Img", img_json);
      localStorage.setItem("Name", nom_json);
      localStorage.setItem("Option", option_json);
      console.log(img);
      console.log(price);
      console.log(option);
      console.log(nom);
      alert("Produit ajouter avec succés ");
    });
  }
};

request.open("GET", "http://localhost:3000/api/cameras/" + idProduct);
request.send();
