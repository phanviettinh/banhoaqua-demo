const menubtn = document.querySelector('.menu-btn');
var nav = document.querySelector('.nav');
const closemenu = document.querySelector('.close-menu')
menubtn.addEventListener('click', () =>{
    nav.style.transform = 'TranslateX(0)'
})

closemenu.addEventListener('click', () => {
    nav.style.transform = 'TranslateX(-100%)'
})