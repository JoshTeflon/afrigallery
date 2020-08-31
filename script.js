let hamburger = document.querySelector('.hamburger');
let navLinks = document.getElementById('main-nav');
let buttons =  document.querySelectorAll('button');
let info = document.querySelectorAll('.info');
let info2 = document.querySelectorAll('.info p');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('toggle');
    navLinks.classList.toggle('nav-active');
})

buttons.forEach(button => {
button.addEventListener('click', () => {
    button.classList.toggle('btn-toggle');
    info.classList.toggle('info-show');
    info2.classList.toggle('info2-show');
});
})