const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        const icon = menuBtn.querySelector("i");

        if (icon) {

            if (navLinks.classList.contains("active")) {
                icon.classList.replace("fa-bars", "fa-xmark");
            } else {
                icon.classList.replace("fa-xmark", "fa-bars");
            }
        }
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            const icon = menuBtn.querySelector("i");
            if (icon) {
                icon.classList.replace("fa-xmark", "fa-bars");
            }
        });
    });

}

const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (!header) return;
    if (window.scrollY > 60) {
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";
        header.style.background = "rgba(15,23,42,.98)";
    } else {

        header.style.boxShadow = "none";
        header.style.background = "rgba(15,23,42,.90)";

    }

});


// ----------------------------
// Smooth Scroll
// ----------------------------

document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});


// ----------------------------
// Active Navigation
// ----------------------------

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 140;
        const height = section.offsetHeight;

        if (window.scrollY >= top &&
            window.scrollY < top + height) {

            current = section.id;

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* =====================================
   WEEK 3 - Part 2
   Scroll Progress + Scroll To Top +
   Reveal Animation
===================================== */


// =============================
// Scroll Progress Bar
// =============================

const progressBar = document.createElement("div");

progressBar.id = "progress-bar";

document.body.appendChild(progressBar);

Object.assign(progressBar.style, {

    position: "fixed",
    top: "0",
    left: "0",
    width: "0%",
    height: "5px",
    background: "#2563eb",
    zIndex: "99999",
    transition: "width .2s linear"

});

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (window.pageYOffset / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});



// =============================
// Scroll To Top Button
// =============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

Object.assign(topBtn.style, {

    position: "fixed",
    right: "25px",
    bottom: "25px",
    width: "50px",
    height: "50px",
    border: "none",
    borderRadius: "50%",
    background: "#2563eb",
    color: "#fff",
    fontSize: "22px",
    cursor: "pointer",
    display: "none",
    zIndex: "9999",
    boxShadow: "0 5px 20px rgba(0,0,0,.25)",
    transition: ".3s"

});

window.addEventListener("scroll", () => {

    if (window.scrollY > 350) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});



// =============================
// Reveal Animation
// =============================

const revealItems = document.querySelectorAll(

".feature-card, .service-card, .portfolio-card, .team-card, .testimonial-card, .faq-item"

);

revealItems.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "all .7s ease";

});

function revealElements() {

    const trigger = window.innerHeight - 100;

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < trigger) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

}

window.addEventListener("scroll", revealElements);

window.addEventListener("load", revealElements);


/* =====================================
   WEEK 3 - Part 3
   FAQ + Contact Form + Counter
===================================== */


// =============================
// FAQ Accordion
// =============================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const answer = item.querySelector("p");

    if (!answer) return;

    answer.style.display = "none";

    item.style.cursor = "pointer";

    item.addEventListener("click", () => {

        faqItems.forEach(faq => {

            const p = faq.querySelector("p");

            if (faq !== item && p) {

                p.style.display = "none";

            }

        });

        answer.style.display =
            answer.style.display === "block"
                ? "none"
                : "block";

    });

});


// =============================
// Contact Form Validation
// =============================

const form = document.querySelector(".contact form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = form.querySelector('input[type="text"]');
        const email = form.querySelector('input[type="email"]');
        const textarea = form.querySelector("textarea");

        if (!name.value.trim()) {

            alert("Please enter your name.");
            name.focus();
            return;

        }

        if (!email.value.trim()) {

            alert("Please enter your email.");
            email.focus();
            return;

        }

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email.value)) {

            alert("Please enter a valid email address.");
            email.focus();
            return;

        }

        if (!textarea.value.trim()) {

            alert("Please enter your message.");
            textarea.focus();
            return;

        }

        alert("✅ Message Sent Successfully!");

        form.reset();

    });

}



// =============================
// Animated Counter
// =============================

const counters = document.querySelectorAll(".stat-box h2");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const text = counter.innerText;

        if (text.includes("/")) return;

        const target = parseInt(text.replace(/\D/g, ""));

        let current = 0;

        const increment = Math.max(1, Math.ceil(target / 100));

        function updateCounter() {

            current += increment;

            if (current >= target) {

                counter.innerText = target + "+";
                return;

            }

            counter.innerText = current + "+";

            requestAnimationFrame(updateCounter);

        }

        updateCounter();

        observer.unobserve(counter);

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    observer.observe(counter);

});



// =============================
// Console Message
// =============================

console.log("✅ Week 3 JavaScript Loaded Successfully");