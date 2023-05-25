var navBar = document.createElement('div');
navBar.className = "row pb-5";
navBar.id = "navbar";
document.body.appendChild(navBar);

var logoSpace = document.createElement('div');
logoSpace.className = "col-4 pb-5"
navBar.appendChild(logoSpace);

var logo = document.createElement('div');
logo.innerHTML = "<img src='../img/logo.png' width='100px' height='auto'>";
logo.className = "logo px-3";
logoSpace.appendChild(logo);

var title = document.createElement('div');
title.className = "col-6 pt-3"
title.id = "title";
title.innerText = "Botanical Corner"
navBar.appendChild(title);

var shoppingCart = document.createElement('div');
shoppingCart.className = "col-1 pt-5 pb-5";
shoppingCart.innerHTML = "<p class='d-inline checkout'>Checkout</p><i class='d-inline fas fa-cart-arrow-down'></i>";
navBar.appendChild(shoppingCart);

var headerContainer = document.createElement('div');
headerContainer.className = "container";
document.body.appendChild(headerContainer);

var headerRow = document.createElement('div');
headerRow.style.height = "700px";
headerRow.className = "row mx-auto";
headerContainer.appendChild(headerRow);

var headerPhoto = document.createElement('div');
headerPhoto.style.height = "500px";
headerPhoto.style.border = "1px solid #efe8d5";
headerPhoto.style.backgroundImage = "url('../img/birdofParadiseLargePhoto.jpg')";
headerPhoto.style.backgroundSize = 'cover';
headerPhoto.className = "col-lg-6 col-12 mx-auto";
headerRow.appendChild(headerPhoto);

var infoContainer = document.createElement('div');
infoContainer.style.height = "500px";
infoContainer.style.backgroundColor = "#efe8d5";
infoContainer.className = "col-lg-5 mx-2 col-12";
headerRow.appendChild(infoContainer);


function Plant(someArray, name, image, size, price, site) {
    this.name = name;
    this.image = image;
    this.size = size;
    this.price = price;
    this.site = site;
    someArray.push(this);
    this.populateInfoHTML = function () {
        var infoTitle = document.createElement('h4');
        infoTitle.className = "text-center m-2";
        infoTitle.style.fontFamily = "'Josefin Slab', serif";
        infoTitle.innerText = this.name;
        infoContainer.appendChild(infoTitle);
    };
};

var birdOfParadiseArray = [];

var birdOfParadise = new Plant(birdOfParadiseArray, 'Bird Of Paradise', '../img/birdOfParadise.jpg', 'X-Large', 195, "../birdofParadise.html");


for (i = 0; i < birdOfParadiseArray.length; i++) {
    console.log(birdOfParadiseArray[i]);
    birdOfParadiseArray[i].populateInfoHTML();
};
