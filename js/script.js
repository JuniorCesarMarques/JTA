var menuLista = document.getElementById("menuLista")

function clickMenu() {
    if(menuLista.style.display == "none") {
        menuLista.style.display = "block"
    } else{
        menuLista.style.display = "none"
    }
}

function showMenu() {
    if(window.innerWidth >= 768) {
        menuLista.style.display = "block"
    } else {
        menuLista.style.display = "none"
    }
}