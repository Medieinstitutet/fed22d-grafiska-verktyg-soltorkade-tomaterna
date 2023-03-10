const hamburger = document.querySelector('.menuButton');
const navMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu')

const apply = document.querySelector('.applyJob');
const applyBtn = document.querySelector('.jobs');
const applyClose = document.querySelector('.closeApply');

const cookies = document.querySelector('.cookies');
const cookiesBtn = document.querySelector('.accept');

const sideOne = document.querySelector('.background1');
const sideTwo = document.querySelector('.background2');


let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');

let sideNext = document.querySelector('#sideNext');
let sidePrev = document.querySelector('#sidePrev');


hamburger.addEventListener('click', menuOpen);
closeMenu.addEventListener('click', navOpen);

applyBtn.addEventListener('click', openJob);
applyClose.addEventListener('click', closeJob );

cookiesBtn.addEventListener('click', closeCookies);
cookies.addEventListener('click' , closeCookies);

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

sideNext.addEventListener('click', nextImage2);
sidePrev.addEventListener('click', prevImage2);


function closeCookies() {
    cookies.style.display ='none';
}

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


function nextImage () {
    sideOne.classList.toggle('none');
    sideTwo.classList.remove('none');
}

function nextImage2 () {
    sideOne.classList.remove('none');
    sideTwo.classList.toggle('none');
}

function prevImage () {
    sideTwo.classList.remove('none');
    sideOne.classList.toggle('none');
}

function prevImage2 () {
    sideOne.classList.remove('none');
    sideTwo.classList.toggle('none');
}