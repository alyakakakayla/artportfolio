const navWelcome = document.getElementById('welcome-item');
const navAbout = document.getElementById('about-item');
const navGraphic = document.getElementById('graphic-item');
const navIllus = document.getElementById('illustration-item');
const navFanart = document.getElementById('fanart-item');
const navConcept = document.getElementById('concept-item');
const navContact = document.getElementById('contact-item');
const checkbox = document.getElementById('check')

navWelcome.addEventListener("click", uncheck);
navAbout.addEventListener("click", uncheck);
navGraphic.addEventListener("click", uncheck);
navIllus.addEventListener("click", uncheck);
navFanart.addEventListener("click", uncheck);
navConcept.addEventListener("click", uncheck);
navContact.addEventListener("click", uncheck);

function uncheck() {
    if(checkbox.checked == true) {
        checkbox.checked = false;
    }
}

uncheck();

if(checkbox.checked == true) {
    //hide scrollbar
}