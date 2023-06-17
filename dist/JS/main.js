const menuBtn = document.querySelector('.menu-btn')
const ham = document.querySelector('.menu-btn__burger')
const nav = document.querySelector('.nav')
const menuNav = document.querySelector('.menu-nav')
menuBtn.addEventListener('click', toggleMenu)
const navItems=document.querySelectorAll('.menu-nav__item')

let showMenu = false;

function toggleMenu() {
    if (!showMenu) {
        ham.classList.add('open')
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(i=>i.classList.add('open'))
        showMenu = true;

    } else {
        ham.classList.remove('open')
        nav.classList.remove('open');
        menuNav.classList.remove('open');
       navItems.forEach(i=>i.classList.remove('open'))
        showMenu = false

    }
}
