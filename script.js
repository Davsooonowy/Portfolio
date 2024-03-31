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
sr.reveal('.toggle_switch_container', { delay: 200 });
sr.reveal('.timeline', { delay: 200 });
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


// toggle switch for work and education
const toggleSwitch = document.querySelector('.toggleSwitch input[type="checkbox"]');

function handleToggleSwitchChange() {
    const timelineContainers = document.querySelectorAll('.timeline');

    timelineContainers.forEach(container => {
        if (toggleSwitch.checked) {
            container.innerHTML = '<div class="container container-left">\n' +
                '                <div class="image" style="background-image:url(\'https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/ae/f3/79/aef379cb-724c-5e00-f5df-90a8114542a1/AppIcon-1x_U007emarketing-0-7-0-85-220.png/1200x600wa.png"></div>\n' +
                '                <div class="content">\n' +
                '                    <div class ="content_date">\n' +
                '                        <span class="date-company-large">Seris Konsalnet</span>\n' +
                '                        <span class="date-company-small">May 2022 - October 2022</span>\n' +
                '                    </div>\n' +
                '                    <h2>Security Guard</h2>\n' +
                '                    <p>\n' +
                '                        Working in security wasn\'t directly related to IT, but it greatly helped me exercise and develop my soft skills. It taught me valuable lessons in time management, scheduling, and effective communication. Overall, despite the absence of direct IT involvement, the experience proved invaluable in honing various professional abilities.\n' +
                '                    </p>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '            <div class="container container-right">\n' +
                '                <div class="image" style="background-image:url(\'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmrHovkCODMXOK7CvuIM97zfjkaXxtxAkvChB7cEzCoQ&s"></div>\n' +
                '                <div class="content">\n' +
                '                    <div class ="content_date">\n' +
                '                        <span class="date-company-large">Lekta AI</span>\n' +
                '                        <span class="date-company-small">March 2024 - present</span>\n' +
                '                    </div>\n' +
                '                    <h2>Junior Software Developer</h2>\n' +
                '                    <p>\n' +
                '                        Currently, I work in software production, primarily focusing on creating tests and implementing clients\' business requirements. This role is significantly enhancing my IT skills as I delve deeper into various aspects of software development and quality assurance. It\'s a rewarding experience as I continuously learn and grow within the field of IT.\n' +
                '                    </p>\n' +
                '                </div>\n' +
                '            </div>';
        } else { //work
            container.innerHTML = '<div class="container container-left">\n' +
                '                <div class="image" style="background-image:url(\'https://roztocze.net/news_foto/2021/0520/123244.jpg"></div>\n' +
                '                <div class="content">\n' +
                '                    <div class ="content_date">\n' +
                '                        <span class="date-company-large">I LO im. ONZ</span>\n' +
                '                        <span class="date-company-small">September 2019 - May 2022</span>\n' +
                '                    </div>\n' +
                '                    <h2>maths-physics-IT profile</h2>\n' +
                '                    <p>\n' +
                '                        this high school profile gave me a lot of mathematical and IT foundations for further development. During this period, I actively participated in school life and participated in competitions. I graduated from school with a 5.27 GPA\n' +
                '                    </p>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '            <div class="container container-right">\n' +
                '                <div class="image" style="background-image:url(\'https://www.agh.edu.pl/repozytoria/__processed__/0/8/csm_agh_znak_wielobarwn_bez_nazwy_d4b64672bc.jpg"></div>\n' +
                '                <div class="content">\n' +
                '                    <div class ="content_date">\n' +
                '                        <span class="date-company-large">AGH University of Cracow</span>\n' +
                '                        <span class="date-company-small">October 2022 - present</span>\n' +
                '                    </div>\n' +
                '                    <h2>Computer Science</h2>\n' +
                '                    <p>\n' +
                '                         I study Computer Science at the Faculty of Computer Science. AGH not only allows me to develop in the field of IT, but also develops my passions and soft skills\n' +
                '                    </p>\n' +
                '                </div>\n' +
                '            </div>';
        }
    });
}

toggleSwitch.addEventListener('change', handleToggleSwitchChange);

handleToggleSwitchChange();