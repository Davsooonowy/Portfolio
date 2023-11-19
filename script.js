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

/*=================== DOUBLE CLICK TO OPEN PROJECTS ===================*/
document.addEventListener("visibilitychange", handleVisibilityChange);

const projectBoxes = document.querySelectorAll('.box');

projectBoxes.forEach(box => {
    let clicked = false;

    box.addEventListener('click', function (event) {
        if (clicked) {
            // Second click, activate the link
            const link = this.querySelector('a');
            if (link) {
                link.setAttribute('target', '_blank');
                window.location.href = link.href;
            }
        } else {
            // First click, toggle the active-hover class
            this.classList.toggle('active-hover');
            clicked = true;

            // Prevent the default link behavior
            event.preventDefault();
        }
    });
});

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
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== ANIMATED TEXT ====================*/
const text = document.querySelector(".animated__text");
const textLoad = () => {
    /* setting the text, and time inside the text container */
    setTimeout(() => {
        text.textContent = "Ambitious Student";
    }, 0);
    setTimeout(() => {
        text.textContent = "Computer Science";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Programmer";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);

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

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
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