
let navbar = document.querySelector('.navbar')
document.querySelector('#bars').onclick = () => {
    navbar.classList.toggle('nav-toggle')
    cartItem.classList.remove('active');
    searchform.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('nav-toggle')
    searchform.classList.remove('active');
}

let searchform = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () => {
    cartItem.classList.remove('active');
    navbar.classList.remove('nav-toggle')
    searchform.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('nav-toggle')
    cartItem.classList.remove('active');
    searchform.classList.remove('actvie');
}