var navBar = document.createElement('div');
navBar.className = "row pb-5";
navBar.id = "navbar";
document.body.appendChild(navBar);

var logoSpace = document.createElement('div');
logoSpace.className = "col-4 pb-5"
navBar.appendChild(logoSpace);

var anchorLogo = document.createElement('a');
anchorLogo.setAttribute("href", "index.html");
logoSpace.appendChild(anchorLogo);

var logo = document.createElement('div');
logo.innerHTML = "<img src='../img/logo.png' width='100px' height='auto'>";
logo.className = "logo px-3";
anchorLogo.appendChild(logo);

var title = document.createElement('div');
title.className = "col-6 pt-3"
title.id = "title";
title.innerText = "Botanical Corner"
navBar.appendChild(title);

var shoppingCart = document.createElement('div');
shoppingCart.className = "col-1 pt-5 pb-5";
shoppingCart.innerHTML = "<p class='d-inline checkout'>Checkout</p><i class='d-inline fas fa-cart-arrow-down'></i>";
navBar.appendChild(shoppingCart);

//Goal: Make a sort function that can choose multiple selectors like size, petFriendly, airCleaner, price)

function Plant(someArray, name, image, size, price, site) {
    this.name = name;
    this.image = image;
    this.size = size;
    this.price = price;
    this.site = site;
    someArray.push(this);
};


Plant.prototype.populateHTML = function () {
    var container = document.createElement('div');

    var info = document.createElement('h6');
    info.innerHTML = "<p> " + this.name + "</p>" +
        "<p>" + this.size + "</p>" + "<p>" +
        "$" + this.price + "</p>";
    info.className = "text-center p-2"
    info.style.fontFamily = "'Josefin Slab', serif";
    info.style.fontSize = "20px";

    var container = document.createElement('div');
    container.className = "container-fluid d-inline-block col-xs-12 col-sm-6 col-md-4 col-xl-3 animated fadeIn text-center";
    container.id = "container";
    document.body.appendChild(container);

    var anchorTags = document.createElement('a');
    anchorTags.setAttribute("href", "" + this.site + "");
    anchorTags.setAttribute("target", "_blank");
    container.appendChild(anchorTags);


    var item = document.createElement('div');
    item.setAttribute("style", "background-image: url('" + this.image + "')");
    item.style.backgroundRepeat = "no-repeat";
    item.style.backgroundSize = "cover";
    item.style.boxShadow = "5px 5px 10px lightgrey";
    item.id = "item";
    item.className = "mx-auto";
    anchorTags.appendChild(item);
    container.appendChild(info);
};


var myArray = [];

//Plant(myArray,name,image,size,price){


var birdOfParadise = new Plant(myArray, 'Bird Of Paradise', '../img/birdOfParadise.jpg', 'X-Large', 195, "../birdofParadise.html");

var birdsNestFern = new Plant(myArray, 'Birds Nest Fern', '../img/birdsNestFern.jpg', 'Small', 35, "../birdofParadise.html");

var crotonPetra = new Plant(myArray, 'Croton Petra', '../img/CrotonPetra.jpg', 'Medium', 65, "../birdofParadise.html");

var cutlassAglaonema = new Plant(myArray, 'Cutlass Aglaonema', '../img/cutlassAglaonema.jpg', 'Medium', 65, "../birdofParadise.html");

var dracaenaJanetCraig = new Plant(myArray, 'Dracaena Janet Craig', '../img/dracaenaJanetCraig.jpg', 'X-Large', 195, "../birdofParadise.html");

var dracaenaLemonLime = new Plant(myArray, 'Dracaena Lemon Lime', '../img/dracaenaLemonLime.jpg', 'Medium', 65, "../birdofParadise.html");

var dracaenaMarginataBush = new Plant(myArray, 'Dracaena Marginata Bush', '../img/dracaenaMarginataBush.jpg', 'Large', 150, "../birdofParadise.html");

var ficusDanielle = new Plant(myArray, 'Ficus Danielle', '../img/ficusDanielle.jpg', 'X-Large', 195, "../birdofParadise.html");

var fiddleLeafFig = new Plant(myArray, 'Fiddle Leaf Fig', '../img/fiddleLeafFig.jpg', 'X-Large', 195, "../birdofParadise.html");

var majestyPalm = new Plant(myArray, 'Majesty Palm', '../img/floorPalm.jpg', 'X-Large', 195);

var freddiePlant = new Plant(myArray, 'Freddie Plant', '../img/freddiePlant.jpg', 'Small', 35, "../birdofParadise.html");

var hedgehogAloe = new Plant(myArray, 'Hedgehog Aloe', '../img/hedgehogAloe.jpg', 'Small', 35, "../birdofParadise.html");


var kimberlyQueenFern = new Plant(myArray, 'Kimberly Queen Fern', '../img/kimberlyQueenFern.jpg', 'Medium', 65, "../birdofParadise.html");


var orbifoliaPlant = new Plant(myArray, 'Orbifolia Plant', '../img/orbifoliaPlant.jpg', 'Medium', 65, "../birdofParadise.html");


var parlorPalm = new Plant(myArray, 'Parlor Palm', '../img/parlorPalm.jpg', 'Medium', 65, "../birdofParadise.html");


var pilea = new Plant(myArray, 'Pilea', '../img/pilea.jpg', 'Small', 35, "../birdofParadise.html");


var PottedBromeliad = new Plant(myArray, 'Potted Bromeliad', '../img/PottedBromeliad.jpg', 'Medium', 65, "../birdofParadise.html");


var redPrayerPlant = new Plant(myArray, 'Red Prayer Plant', '../img/redPrayerPlant.jpg', 'Small', 35, "../birdofParadise.html");


var sansevieria = new Plant(myArray, 'Sansevieria', '../img/sansevieria.jpg', 'Large', 150);

var silverBay = new Plant(myArray, 'Silver Bay', '../img/silverBay.jpg', 'Large', 150, "../birdofParadise.html");



for (i = 0; i < myArray.length; i++) {
    myArray[i].populateHTML();
};
