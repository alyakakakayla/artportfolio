const navWelcome = document.getElementById('welcome-item');
const navAbout = document.getElementById('about-item');
const navIllus = document.getElementById('illustration-item');
const navFanart = document.getElementById('fanart-item');
const navConcept = document.getElementById('concept-item');
const navContact = document.getElementById('contact-item');
const checkbox = document.getElementById('check')

navWelcome.addEventListener("click", uncheck);
navAbout.addEventListener("click", uncheck);
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

let modal = document.getElementById("popup");

let modalImage = document.getElementById("modal-image");

let closeButton = document.getElementsByClassName("close")[0];

let images = document.querySelectorAll(".expandable");

images.forEach(function(image) {
    image.onclick = function (e) {
        let src = e.target.src; 
        modal.style.display = "block";  
        modalImage.src = src; 
    };
});

closeButton.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

if(checkbox.checked == true) {
    //hide scrollbar
}