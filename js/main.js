
const hamburger = document.querySelector('.menuButton');
const navMenu = document.querySelector('.openMenu');

const apply = document.querySelector('.applyJob');
const applyBtn = document.querySelector('.jobs');
const applyClose = document.querySelector('.closeApply');

hamburger.addEventListener('click', menuOpen);
navMenu.addEventListener('click', navOpen);

applyBtn.addEventListener('click', openJob);
applyClose.addEventListener('click', closeJob );

function menuOpen () {
    hamburger.classList.remove('active');
    navMenu.classList.toggle('active');
}

function navOpen () {
    hamburger.classList.toggle('active');
    navMenu.classList.remove('active');
}

function openJob () {
    apply.classList.remove('none');
}
function closeJob () {
    apply.classList.toggle('none');
}


const sideOne = document.querySelector('.background1');
const sideTwo = document.querySelector('.background2');


let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

function nextImage () {
    sideOne.classList.toggle('none');
    sideTwo.classList.remove('none');
}

function prevImage () {
    sideOne.classList.remove('none');
    sideTwo.classList.toggle('none');
}