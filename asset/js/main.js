/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')



function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*===== CHANGER BACKGROUD HEADER =====*/
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 200)nav.classList.add('scroll-header');else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll',scrollHeader);

/*===== SHOW SCROLL =====*/

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >= 560)scrollTop.classList.add('scroll-top');else scrollTop.classList.remove('scroll-top');
}
window.addEventListener('scroll',scrollTop);

/*===== CHANGE DARK THEME MOON =====*/
// LAY BUTTON THEME 
const themeButton = document.getElementById('theme-button')

// theme
const darktheme = 'dark-theme';
//  chang icon moon night or dark
const iconTheme = 'bx-sun';

// selected theme  // localStorage để lưu lại 
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// current theme selected 
const currentThemeSelected = () => document.body.classList.contains(darktheme) ? 'dark' : 'night';
// icon
const currentIconSelected = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

// xử lý if else
if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove' ](darktheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove' ](iconTheme)
}



// active dark moon
themeButton.addEventListener('click', () => {
    // document.body.classList.toggle(darktheme) lấy từ css có object là darktheme
    // add or remove the dark / icon theme
    document.body.classList.toggle(darktheme)
    // add icon and remove dark mon
    themeButton.classList.toggle(iconTheme)

    // save active selected theme

    localStorage.setItem('selected-theme',currentThemeSelected())
    localStorage.setItem('selected-icon',currentIconSelected())


})


/*=====  SCROLL ANIMATION =====*/

const sr = ScrollReveal({
    origin: 'top',
    distance : '30px',
    duration : 2000,
    reset : true,
});

sr.reveal(`.home__data,.home__img,.about__data,.about__img,
.section-subtitle,.section-title,.services__content,
.menu__content,.app__data,.app__img,.contact__data,.footer__content`,{
    interval :200
});