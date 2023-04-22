var minecraftImage = document.querySelector(".minecraft__image");

function iniciar(){
    try{
        document.querySelector("#hamburger").addEventListener('click', 
        hamburger, false);
    }

    catch{

    }
    
}

window.addEventListener('load', iniciar, false);

function drop(){
    
    
}

function hamburger(){
    var menu = document.querySelector("#hamburger");
    var navbar = document.querySelector(".navbar");
    var nav = document.querySelector(".nav");
    
    menu.classList.toggle("rotate180");
    navbar.classList.toggle("droppable");
    nav.classList.toggle("appear");
    //nav.classList.toggle("fadeable");
}