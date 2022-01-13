window.addEventListener("scroll", () => {
    headerTop();
    windowTop();
    debounce(animate(), 1000);
});

//ANIMAÇÃO NO HEADER
function headerTop(){
    let y = document.documentElement.scrollTop,
        header = document.querySelector("header");
    
    if(y > 30){
        header.classList.add("header-active");
    } else {
        header.classList.remove("header-active");
    }
}

//VOLTAR AO TOPO
function windowTop(){
    let y = document.documentElement.scrollTop,
        icon = document.querySelector(".button-to-top");

    if(y > 20){
        icon.style.transform = "scale(1)";
    } else {
        icon.style.transform = "scale(0)";
    }
}

function buttonToTop(){
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

//MODAL DE AVISO
let container = document.querySelector(".message");

setTimeout(() => {
    container.style.transform = "scale(1)";
}, 2000);

function closeModal(){
    container.style.transform = "scale(0)";
}

//MENU HAMBÚRGUER
function menuHamb(){
    document.getElementById("nav").classList.toggle("active-menu");
}

//ANIMAÇÃO
const debounce = function(func, wait, immediate){
    let timeout;
    return function(...args){
        const context = this;
        const later = function(){
            timeout = null;
            if(!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args)
    };
};

function animate(){
    let scrollTopWindow = window.pageYOffset + ((window.innerHeight * 3) / 4);
        target = document.querySelectorAll("[data-animate]");
    
    target.forEach(element => {
        if((scrollTopWindow) > element.offsetTop){
            element.classList.add("animate");
        } else{
            element.classList.remove("animate");
        }
    });
}
animate();