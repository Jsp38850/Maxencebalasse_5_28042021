//On crée une variable qui appelle l'id container
const container = document.getElementById("container");

//On créé un tableau
const ul = document.createElement("ul");
container.appendChild(ul);
ul.className = "row mt-3 list-unstyled ";

const request = new XMLHttpRequest();
request.onreadystatechange = function listProduct() {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    // Affiche des produits //
    const response = JSON.parse(this.responseText);
    response.forEach((element) => {
      const li = document.createElement("li");
      ul.appendChild(li);
      li.className = "col-12 col-lg-4 ";

      const figure = document.createElement("figure");
      li.appendChild(figure);
      figure.className = "card mb-5 shadow w-100";

      // Images produit //
      const cameraImg = document.createElement("img");
      figure.appendChild(cameraImg);
      cameraImg.className = "card-img-top h-230 ";
      cameraImg.id = "cameraImg";
      cameraImg.src = element.imageUrl;

      const cameraInfo = document.createElement("figcaption");
      figure.appendChild(cameraInfo);
      cameraInfo.className = "card-body d-flex justify-content-between";
      cameraInfo.id = "cameraInfo";

      // Nom du produit //
      const cameraName = document.createElement("h5");
      cameraInfo.appendChild(cameraName);
      cameraName.className = "card-title text-center";
      cameraName.id = "cameraName";
      cameraName.textContent = element.name;

      // Prix produit //
      const cameraPrice = document.createElement("p");
      cameraInfo.appendChild(cameraPrice);
      cameraPrice.id = "cameraPrice";
      cameraPrice.classList = "card-text text-center";
      cameraPrice.textContent = element.price / 100 + " " + "€";

      // Description Produit //
      const cameraDescription = document.createElement("span");
      figure.appendChild(cameraDescription);
      cameraDescription.classList = "mx-3 my-3 fst-italic";
      cameraDescription.id = "cameraDescription";
      cameraDescription.textContent = element.description;

      // Bouton "En savoir plus" produit //
      const cameraBouton = document.createElement("a");
      figure.appendChild(cameraBouton);
      cameraBouton.classList = "btn bg-pink  border-0 text-dark card-body ";
      cameraBouton.textContent = "En savoir plus ...";
      cameraBouton.href = "products.html?id=" + element._id;
    });
  }
};
//*******************************************************//

//Systeme d'affichage du nombre d'article dans le panier

//Recupere mon panier au localstorage format JSON
let qtyTotal = JSON.parse(localStorage.getItem("qtyTotal"));

//Nombre de produit dans le panier (Affichage dans le header)
QtdHeader();
//*******************************************************//

request.open("GET", "http://localhost:3000/api/cameras");
request.send();
