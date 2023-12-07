/*==================== CHANGE TITLE ====================*/
const pageTitle = "Dawid Mularczyk - portfolio";
const newTitle = "Feel free to contact me!";

function handleVisibilityChange() {
    if (document.hidden) {
        document.title = newTitle;
    } else {
        document.title = pageTitle;
    }
}
document.addEventListener("visibilitychange", handleVisibilityChange);


/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== ANIMATED TEXT ====================*/
const text = document.querySelector(".animated__text");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Ambitious Student";
    }, 0);
    setTimeout(() => {
        text.textContent = "CS Enthusiast";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Code Artisan";
    }, 8000);
    setTimeout(() => {
        text.textContent = "Tech Explorer";
    }, 12000);
}

textLoad();
setInterval(textLoad, 16000);

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*==================== HOVER ALWAYS ON (FOR DEVICES WITHOUT HOVER EFFECT) ====================*/
document.addEventListener('DOMContentLoaded', function () {
    const projectBoxes = document.querySelectorAll('.projects_container .box');

    function toggleHoverEffect() {
        const isSmallScreen = window.innerWidth <= 767;

        projectBoxes.forEach(box => {
            if (isSmallScreen) {
                box.classList.add('hover-effect');
            } else {
                box.classList.remove('hover-effect');
            }
        });
    }

    toggleHoverEffect();

    window.addEventListener('resize', toggleHoverEffect);
});


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1600,
    delay: 200,
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 200});
sr.reveal('.home__social-icon',{ interval: 200});
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200});
sr.reveal('.home__title', {});
sr.reveal('.button', { delay: 200 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.about__subtitle, .about__text', { delay: 300 });
sr.reveal('.skills__icon, .skills__name', { interval: 150 });
sr.reveal('.box', { interval: 200 });
sr.reveal('.contact__input', { interval: 200 });
sr.reveal('.section_description', { interval: 200 });
sr.reveal('.contact__info, .contact__title, .contact__content, .info', { interval: 200 });

/*==================== CONTACT FORM ====================*/
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name == "" || email == "" || message == "") {
        alert("Please fill out all required fields.");
        return false;
    }
    return true;
}