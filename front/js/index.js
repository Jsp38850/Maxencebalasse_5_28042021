 
const container = document.getElementById('container');

let ul = document.createElement('ul');
container.appendChild(ul);

ul.className = 'row mt-3 list-unstyled';

    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {

            // Affiche des produits // 
            var response = JSON.parse(this.responseText);
            response.forEach(element => {

                let li = document.createElement('li');
                ul.appendChild(li);
                li.className = 'col-12 col-lg-4 '
                                   
                let figure = document.createElement('figure');
                li.appendChild(figure);
                figure.className = 'card mb-5 shadow w-100';
    
                // Images produit // 
                let cameraImg = document.createElement('img');
                figure.appendChild(cameraImg);
                cameraImg.className = 'card-img-top h-230 ';
                cameraImg.id = 'cameraImg';
                cameraImg.src = element.imageUrl;
    
                let cameraInfo = document.createElement('figcaption');
                figure.appendChild(cameraInfo);
                cameraInfo.className = 'card-body d-flex justify-content-between';
                cameraInfo.id = 'cameraInfo';
    
                 // Nom du produit // 
                let cameraName = document.createElement('h5');
                cameraInfo.appendChild(cameraName);
                cameraName.className = 'card-title text-center';
                cameraName.id = 'cameraName';
                cameraName.textContent = element.name;
    
                 // Prix produit // 
                let cameraPrice = document.createElement('p');
                cameraInfo.appendChild(cameraPrice);
                cameraPrice.id = 'cameraPrice';
                cameraPrice.classList = 'card-text text-center';
                cameraPrice.textContent = (element.price/100 + ' ' + '€');

                let cameraAvis = document.createElement('p');
                figure.appendChild(cameraAvis);
                cameraAvis.classList = 'ml-3 ';
                cameraAvis.textContent = ('Avis' + ' ' + '(' + 0 + ')')
               
                
    
                 // Description Produit // 
                let cameraDescription = document.createElement('span');
                figure.appendChild(cameraDescription);
                cameraDescription.classList = 'mx-3 my-3 fst-italic';
                cameraDescription.id = 'cameraDescription';
                cameraDescription.textContent = element.description;      
                
                 // Bouton Info produit // 
                let cameraBouton = document.createElement('a');
                figure.appendChild(cameraBouton);
                cameraBouton.classList = 'btn bg-pink  border-0 text-dark card-body';
                cameraBouton.textContent = 'En savoir plus ...';
                cameraBouton.href = 'products.html?id=' + element._id;
        
  
            });
        };
    }
    request.open("GET", "http://localhost:3000/api/cameras");
    request.send();
