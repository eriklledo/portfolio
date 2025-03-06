//Toggling Menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        })
    }
}

showMenu('nav-toggle', 'nav-menu');

//Toggling Active Link
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// Scroll Reveal

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.home-title', {} )
sr.reveal('.button', {delay: 20} )
sr.reveal('.home-img', {delay: 40} )
sr.reveal('.home-social', {delay: 40,} )

sr.reveal('.about-img', {} )
sr.reveal('.about-subtitle', {delay: 20} )
sr.reveal('.about-text', {delay: 40} )

sr.reveal('.skills-subtitle', {delay: 10} )
sr.reveal('.skills-text', {delay: 15} )
sr.reveal('.skills-data', {interval: 20} )
sr.reveal('.skills-img', {delay: 40} )

sr.reveal('.work-img', {interval: 20} )

sr.reveal('.contact-input', {interval: 20} )