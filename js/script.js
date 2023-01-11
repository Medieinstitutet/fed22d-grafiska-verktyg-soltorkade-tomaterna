const hamburger = document.querySelector('.menuButton');
const navMenu = document.querySelector('.openMenu');

const apply = document.querySelector('.applyJob');

hamburger.addEventListener('click', menuOpen);
navMenu.addEventListener('click', navOpen);

apply.addEventListener('click', openJob);

function menuOpen () {
    hamburger.classList.remove('active');
    navMenu.classList.toggle('active');
}

function navOpen () {
    hamburger.classList.toggle('active');
    navMenu.classList.remove('active');
}

function openJob () {
    apply.classList.toggle('active');
} //denna vill inte fungera....