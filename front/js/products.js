 
const container = document.getElementById('container');

let ul = document.createElement('ul');
container.appendChild(ul);

ul.className = 'row mt-3 list-unstyled';

    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {

            // Product display // 
            var response = JSON.parse(this.responseText);
            response.forEach(element => {

                let li = document.createElement('li');
                ul.appendChild(li);
                li.className = 'col-12 col-lg-4'

                let link = document.createElement('a');
                li.appendChild(link);
                link.id = 'CamerasLink';
                link.classList = 'stretched-link';
                link.href = 'products.html?id=' + element._id;
                    
                let figure = document.createElement('figure');
                li.appendChild(figure);
                figure.className = 'card mb-3 shadow';
    
                let cameraImg = document.createElement('img');
                figure.appendChild(cameraImg);
                cameraImg.className = 'card-img-top ';
                cameraImg.id = 'cameraImg';
                cameraImg.src = element.imageUrl;
    
                let teddyInfo = document.createElement('figcaption');
                figure.appendChild(teddyInfo);
                teddyInfo.className = 'card-body';
                teddyInfo.id = 'teddyInfo';
    
                let teddyName = document.createElement('h5');
                teddyInfo.appendChild(teddyName);
                teddyName.className = 'card-title text-center';
                teddyName.id = 'teddyName';
                teddyName.textContent = element.name;
    
                let teddyPrice = document.createElement('p');
                teddyInfo.appendChild(teddyPrice);
                teddyPrice.id = 'teddyPrice';
                teddyPrice.classList = 'card-text text-center';
                teddyPrice.textContent = (element.price/100 + '€');
    
                let teddyDescription = document.createElement('span');
                figure.appendChild(teddyDescription);
                teddyDescription.classList = 'mx-3 my-3';
                teddyDescription.id = 'teddyDescription';
                teddyDescription.textContent = element.description;         
        
  
            });
        };
    }
    request.open("GET", "http://localhost:3000/api/cameras");
    request.send();