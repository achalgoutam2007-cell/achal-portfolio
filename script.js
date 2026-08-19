/*==========================================
        MOBILE MENU
==========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    menuBtn.innerHTML = navbar.classList.contains("active")

        ? '<i class="fa-solid fa-xmark"></i>'

        : '<i class="fa-solid fa-bars"></i>';

});


/*==========================================
        CLOSE MENU AFTER CLICK
==========================================*/

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});


/*==========================================
        STICKY HEADER
==========================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.padding = "12px 45px";

        header.style.background = "rgba(5,8,22,.90)";

    }

    else {

        header.style.padding = "18px 45px";

        header.style.background = "rgba(255,255,255,.08)";

    }

});


/*==========================================
        ACTIVE NAVBAR
==========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*==========================================
        TYPING ANIMATION
==========================================*/

const typing = document.querySelector(".typing");

const textArray = [

    "Frontend Developer",

    "Web Designer",

    "React Learner",

    "Computer Engineering Student"

];

let textIndex = 0;

let charIndex = 0;

let isDeleting = false;

function typeEffect() {

    const currentText = textArray[textIndex];

    if (!isDeleting) {

        typing.textContent = currentText.substring(0, charIndex++);

        if (charIndex > currentText.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    }

    else {

        typing.textContent = currentText.substring(0, charIndex--);

        if (charIndex < 0) {

            isDeleting = false;

            textIndex++;

            if (textIndex >= textArray.length)

                textIndex = 0;

        }

    }

    setTimeout(typeEffect, isDeleting ? 50 : 120);

}

typeEffect();


/*==========================================
        SCROLL TO TOP BUTTON
==========================================*/

const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollBtn.style.opacity = "1";

        scrollBtn.style.pointerEvents = "auto";

    }

    else {

        scrollBtn.style.opacity = "0";

        scrollBtn.style.pointerEvents = "none";

    }

});


/*==========================================
        SMOOTH SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});