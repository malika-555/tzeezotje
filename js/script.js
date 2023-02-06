"use strict"

// burger

const iconMenu = document.querySelector(".icon__menu");
if (iconMenu) {
    const menuBody = document.querySelector(".menu__body");
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle("_lock");
        iconMenu.classList.toggle("_active");
        menuBody.classList.toggle("_active");
    });
}

// popup

const myBtn = document.querySelector("#myBtn");
const myModal = document.querySelector("#myModal");
const close = document.querySelector(".close");
const modalContent = document.querySelector(".modal-content ");
const modalSubtitle = document.querySelector(".modal__subtitle");
const modaltitle = document.querySelector(".modal__title");

myBtn.addEventListener("click", () => {
    myModal.style.display = "block";
});
close.addEventListener("click", (e) => {
    const target = e.target;
    myModal.style.display = "";

});

window.addEventListener("click", (e) => {
    closePopap(e);
});

function closePopap(e) {
    if (myModal.style.display == "block") {

        if (e.target === myModal) {
            return myModal.style.display = "";
        }
    }
}

// ajax

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();


    const formData = new FormData(form);

    fetch('send.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.text())
        .then(data => {
            console.log('Success:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    form.style.display = "none";
    modalSubtitle.style.display = "none";
    modaltitle.textContent = "Your message has been sent";
    setTimeout(() => {

        myModal.style.display = "";
    }, 2000);
});

// swiper
var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    keyboard: true,
    loop: true,
    slideToClickSlide: true
});

// swiper2

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 2.2,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
    },
    freeMode: true,
    loop: true,

});

