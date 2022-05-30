// menu burger

var sidenav = document.getElementById("Monburger"); // conteneur du menu burger
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}

/* fermeture du menu burger quand on clique sur un lien 
    fermeture pour chaque lien */

const eachlien = document.querySelectorAll(".fermer");
eachlien.forEach(element => 
{
    element.onclick = closeNav;    
});


// fenêtres modales 

// variable qui contient modal-container
const modalContainer = document.querySelector(".modal-container");


// on va insérer dans une liste tous les éléments qui ont pour classe : modal-trigger
const modalTriggers = document.querySelectorAll(".modal-trigger");

const toggle_de_la_modal = () => // fonction pour activer ou désactiver la fenêtre modale au click 
{
    modalContainer.classList.toggle("active"); 
}

// pour chaque click dans chaque élément modal-trigger, il y aura un toggle de la fenêtre modale
modalTriggers.forEach(trigger => trigger.addEventListener("click", toggle_de_la_modal));

// 2ème fenètre modale

const modalContainer2 = document.querySelector(".modal-container2");

const modalTriggers2 = document.querySelectorAll(".modal-trigger2");

const toggle_de_la_modal2 = () => 
{
    modalContainer2.classList.toggle("active"); 
}

modalTriggers2.forEach(trigger => trigger.addEventListener("click", toggle_de_la_modal2));


// 3ème fenètre modale

const modalContainer3 = document.querySelector(".modal-container3");

const modalTriggers3 = document.querySelectorAll(".modal-trigger3");

const toggle_de_la_modal3 = () => 
{
    modalContainer3.classList.toggle("active"); 
}

modalTriggers3.forEach(trigger => trigger.addEventListener("click", toggle_de_la_modal3));


// 4ème fenètre modale


const modalContainer4 = document.querySelector(".modal-container4");

const modalTriggers4 = document.querySelectorAll(".modal-trigger4");

const toggle_de_la_modal4 = () =>  
{
    modalContainer4.classList.toggle("active"); 
}

modalTriggers4.forEach(trigger => trigger.addEventListener("click", toggle_de_la_modal4));



// animations 

const titre = document.querySelectorAll('h1 div');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');

window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(titre, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)

    TL.play();
})

// animation pour la barre de navigation

const navigation = document.querySelector('nav');
const liens = document.querySelectorAll('nav li a');

window.addEventListener('scroll', () => {

    if(window.scrollY > 400)
    {
       navigation.classList.add('anim-nav');
       liens.forEach(lien => lien.classList.add('anim-liens'));
    }
    else 
    {
        navigation.classList.remove('anim-nav');
        liens.forEach(lien => lien.classList.remove('anim-liens'));
    }

})