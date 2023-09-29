let menuNav = document.querySelector("#menu-nav")
let menuMobile = document.querySelector("#navbar-mobile")
console.log(menuMobile)

menuNav.onclick = function(){
    menuMobile.classList.toggle("appear")
}