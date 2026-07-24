/* =====================================================
                SCRIPT.JS
                PART 1
===================================================== */

/* ==========================================
            LOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1800);

});

/* ==========================================
            CUSTOM CURSOR
========================================== */

const cursor = document.querySelector(".cursor");
const cursorBlur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    cursorBlur.style.left = e.clientX + "px";
    cursorBlur.style.top = e.clientY + "px";

});

/* ==========================================
            CURSOR HOVER
========================================== */

const hoverItems = document.querySelectorAll(
"a, button, .project-card, .skill-card, .service-card"
);

hoverItems.forEach(item => {

    item.addEventListener("mouseenter", () => {

        cursor.style.transform = "translate(-50%, -50%) scale(2)";
        cursorBlur.style.transform = "translate(-50%, -50%) scale(1.6)";

    });

    item.addEventListener("mouseleave", () => {

        cursor.style.transform = "translate(-50%, -50%) scale(1)";
        cursorBlur.style.transform = "translate(-50%, -50%) scale(1)";

    });

});

/* ==========================================
            SCROLL PROGRESS BAR
========================================== */

const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress = (scrollTop / height) * 100;

    progressBar.style.width = progress + "%";

});

/* ==========================================
            SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* =====================================================
                SCRIPT.JS
                PART 2
===================================================== */

/* ==========================================
            REVEAL ON SCROLL
========================================== */

const revealElements = document.querySelectorAll(
".reveal, .fade-up, .fade-left, .fade-right, .scale-up"
);

function revealOnScroll(){

    revealElements.forEach((element)=>{

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* ==========================================
            ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", ()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

/* ==========================================
            NAVBAR BLUR ON SCROLL
========================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

/* ==========================================
            MOUSE SPOTLIGHT
========================================== */

const spotlight = document.querySelector(".spotlight");

document.addEventListener("mousemove",(e)=>{

    spotlight.style.left = e.clientX + "px";

    spotlight.style.top = e.clientY + "px";

});

/* ==========================================
            ANIMATED COUNTERS
========================================== */

const counters = document.querySelectorAll(".stat-card h3");

const counterObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter = entry.target;

            const targetText = counter.innerText;

            const number = parseInt(targetText);

            let count = 0;

            const speed = Math.max(15, Math.floor(1500 / number));

            const updateCounter = ()=>{

                if(count < number){

                    count++;

                    counter.innerText = count + targetText.replace(number,"");

                    setTimeout(updateCounter,speed);

                }else{

                    counter.innerText = targetText;

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});

/* =====================================================
                SCRIPT.JS
                PART 3
===================================================== */

/* ==========================================
            TYPING EFFECT
========================================== */

const typingElement = document.querySelector(".hero h2");

const words = [
    "Frontend Architect",
    "UI/UX Designer",
    "Creative Developer",
    "Web Designer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect(){

    if(!typingElement) return;

    const currentWord = words[wordIndex];

    if(!deleting){

        typingElement.textContent =
            currentWord.substring(0, charIndex++);

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typingEffect,1500);

            return;

        }

    }else{

        typingElement.textContent =
            currentWord.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex = (wordIndex + 1) % words.length;

        }

    }

    setTimeout(typingEffect,deleting ? 60 : 100);

}

typingEffect();

/* ==========================================
            MAGNETIC BUTTON
========================================== */

const buttons = document.querySelectorAll(
".btn-primary, .btn-secondary, .btn-nav"
);

buttons.forEach(button=>{

    button.addEventListener("mousemove",(e)=>{

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width/2;

        const y = e.clientY - rect.top - rect.height/2;

        button.style.transform =
        `translate(${x*0.2}px, ${y*0.2}px)`;

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translate(0,0)";

    });

});

/* ==========================================
            3D CARD TILT
========================================== */

const cards = document.querySelectorAll(
".project-card,.skill-card"
);

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX = -(y - rect.height/2)/40;

const rotateY = (x - rect.width/2)/40;

        card.style.transform =
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-10px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0)";

    });

});

/* ==========================================
            BACK TO TOP BUTTON
========================================== */

const topButton = document.createElement("button");

topButton.innerHTML =
'<i class="fas fa-arrow-up"></i>';

topButton.className = "back-to-top";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topButton.classList.add("show");

    }else{

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ==========================================
            DISABLE DRAGGING
========================================== */

document.querySelectorAll("img").forEach(image=>{

    image.setAttribute("draggable","false");

});

/* =====================================================
                SCRIPT.JS
                PART 4 (FINAL)
===================================================== */

/* ==========================================
            FLOATING PARTICLES
========================================== */

const particleContainer = document.getElementById("particles");

if (particleContainer) {

    for (let i = 0; i < 40; i++) {

        const particle = document.createElement("span");

        particle.classList.add("particle");

        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";

        particle.style.animationDelay =
            Math.random() * 10 + "s";

        particle.style.animationDuration =
            8 + Math.random() * 10 + "s";

        particleContainer.appendChild(particle);
    }

}

/* ==========================================
            PARALLAX BLOBS
========================================== */

window.addEventListener("mousemove", (e) => {

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    document.querySelectorAll(".blob").forEach((blob, index) => {

        const speed = (index + 1) * 20;

        blob.style.transform =
            `translate(${x * speed}px, ${y * speed}px)`;

    });

});

/* ==========================================
            RANDOM GLOW
========================================== */

setInterval(() => {

    document.querySelectorAll(
        ".skill-card,.project-card,.service-card"
    ).forEach(card => {

        if (Math.random() > 0.85) {

            card.classList.add("glow");

            setTimeout(() => {

                card.classList.remove("glow");

            }, 1200);

        }

    });

}, 2500);

/* ==========================================
            MOBILE MENU (IF ADDED)
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-links");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("open");

        menuBtn.classList.toggle("active");

    });

}

/* ==========================================
            RESIZE FIX
========================================== */

window.addEventListener("resize", () => {

    if (window.innerWidth > 768 && navMenu) {

        navMenu.classList.remove("open");

    }

});

/* ==========================================
            PERFORMANCE
========================================== */

window.addEventListener("blur", () => {

    document.body.classList.add("paused");

});

window.addEventListener("focus", () => {

    document.body.classList.remove("paused");

});

/* ==========================================
            CONSOLE MESSAGE
========================================== */

console.log(
"%cWelcome to Meet Vishwakarma's Portfolio 🚀",
"color:#ff8c32;font-size:18px;font-weight:bold;"
);

console.log(
"%cDesigned & Developed with HTML, CSS & JavaScript",
"color:#ffffff;font-size:14px;"
);

/* ==========================================
            END OF SCRIPT
========================================== */


// Your existing JavaScript...


// Mobile Navbar
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});
