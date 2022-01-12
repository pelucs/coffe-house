window.addEventListener("scroll", () => {
    headerTop();
    windowTop();
    animate();
});

function headerTop(){
    let y = document.documentElement.scrollTop,
        header = document.querySelector("header");
    
    if(y > 30){
        header.classList.add("header-active");
    } else {
        header.classList.remove("header-active");
    }
}

function windowTop(){
    let y = document.documentElement.scrollTop,
        icon = document.querySelector(".button-to-top");

    if(y > 20){
        icon.style.transform = "scale(1)";
    } else {
        icon.style.transform = "scale(0)";
    }
}

//VOLTAR AO TOPO
function buttonToTop(){
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

//MENU HAMBÚRGUER
function menuHamb(){
    document.getElementById("nav").classList.toggle("active-menu");
}

//ANIMAÇÃO
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