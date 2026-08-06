
const app = document.getElementById("app");

const templates = {
    home: document.getElementById("home-template"),
    about: document.getElementById("about-template"),
    services: document.getElementById("services-template"),
    portfolio: document.getElementById("portfolio-template"),
    contact: document.getElementById("contact-template"),
    notfound: document.getElementById("notfound-template")
};

function renderPage(page){
    const template = templates[page] || templates.notfound;
    app.innerHTML = "";
    app.appendChild(template.content.cloneNode(true));
    app.firstElementChild.classList.add("fade");
    updateActiveLink(page);
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}

function updateActiveLink(page){
    document.querySelectorAll(".nav-links a").forEach(link=>{
        link.classList.remove("active");
        if(link.dataset.page===page){
            link.classList.add("active");
        }
    });
}

function navigate(page){
    history.pushState(
        {page},
        "",
        "#" + page
    );
    renderPage(page);
}

document.addEventListener("click",e=>{
    const link=e.target.closest("[data-page]");
    if(!link) return;
    e.preventDefault();
    navigate(link.dataset.page);
});

window.addEventListener("popstate",()=>{
    const page=
        location.hash.replace("#","") ||
        "home";
    renderPage(page);
});

window.addEventListener("DOMContentLoaded",()=>{
    const page=
        location.hash.replace("#","") ||
        "home";
    renderPage(page);
});

const menuBtn=document.querySelector(".menu-btn");
const navLinks=document.querySelector(".nav-links");
menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("active");
    const icon=menuBtn.querySelector("i");
    if(navLinks.classList.contains("active")){
        icon.classList.replace(
            "fa-bars",
            "fa-xmark"
        );
    }

    else{

        icon.classList.replace(
            "fa-xmark",
            "fa-bars"
        );
    }

});

console.log("✅ Script Part 1 Loaded");

const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("dark")) {

        icon.classList.replace("fa-moon", "fa-sun");

    } else {

        icon.classList.replace("fa-sun", "fa-moon");

    }

});

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        loader.style.transition = "0.5s";

    }, 700);

});
const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (window.scrollY / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

document.addEventListener("submit", (e) => {

    if (e.target.id === "contactForm") {

        e.preventDefault();

        alert("✅ Message Sent Successfully!");

        e.target.reset();

    }

});

document.addEventListener("click", (e) => {

    const link = e.target.closest("[data-page]");

    if (!link) return;

    navLinks.classList.remove("active");

    const icon = menuBtn.querySelector("i");

    icon.classList.remove("fa-xmark");

    icon.classList.add("fa-bars");

});

console.log("✅ Script Part 2 Loaded");

function refreshNavigation() {

    const currentPage =
        location.hash.replace("#", "") || "home";

    updateActiveLink(currentPage);

}

window.addEventListener("hashchange", refreshNavigation);

function pageTransition() {

    const section = app.firstElementChild;

    if (!section) return;

    section.classList.remove("fade");

    void section.offsetWidth;

    section.classList.add("fade");

}

document.addEventListener("click", (e) => {

    const link = e.target.closest("[data-page]");

    if (!link) return;

    setTimeout(pageTransition, 50);

});
window.addEventListener("error", (event) => {
    console.error("SPA Error :", event.message);

});

console.log("%cTechSphere SPA", "color:#2563eb;font-size:18px;font-weight:bold;");

console.log("✅ SPA Initialized Successfully");

console.log("✅ Client-side Routing Enabled");

console.log("✅ Dynamic Templates Loaded");

console.log("✅ Week 5 Project Ready");