"use strict";

// ===============================
// Mobile Navigation
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    const expanded = menuBtn.getAttribute("aria-expanded") === "true";

    menuBtn.setAttribute("aria-expanded", !expanded);

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (icon) {
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-xmark");
    }
  });
}

// Close menu after clicking navigation

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");

    if (menuBtn) {
      menuBtn.setAttribute("aria-expanded", "false");

      const icon = menuBtn.querySelector("i");

      if (icon) {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }
    }
  });
});

// ===============================
// Sticky Header
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (!header) return;

  if (window.scrollY > 60) {
    header.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";

    header.style.background = "rgba(15,23,42,.98)";
  } else {
    header.style.boxShadow = "none";

    header.style.background = "rgba(15,23,42,.92)";
  }
});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const id = this.getAttribute("href");

    if (!id || id === "#") return;

    const target = document.querySelector(id);

    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

function activeMenu() {
  let current = "";

  sections.forEach((section) => {
    const top = section.offsetTop - 120;

    const height = section.offsetHeight;

    if (window.scrollY >= top && window.scrollY < top + height) {
      current = section.id;
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", activeMenu);

window.addEventListener("load", activeMenu);

// ===============================
// Keyboard Accessibility
// ===============================

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");

    menuBtn.setAttribute("aria-expanded", "false");
  }
});

console.log("✅ Script Part 1 Loaded");

// ===============================
// Scroll Progress Bar
// ===============================

const progressBar = document.getElementById("progress-bar");

function updateProgressBar() {
  if (!progressBar) return;

  const totalHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const progress = (window.scrollY / totalHeight) * 100;

  progressBar.style.width = progress + "%";
}

window.addEventListener("scroll", updateProgressBar);

window.addEventListener("load", updateProgressBar);

// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");

function toggleTopButton() {
  if (!topBtn) return;

  if (window.scrollY > 350) {
    topBtn.style.display = "flex";
  } else {
    topBtn.style.display = "none";
  }
}

window.addEventListener("scroll", toggleTopButton);

window.addEventListener("load", toggleTopButton);

if (topBtn) {
  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// ===============================
// Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(
  ".feature-card, .service-card, .portfolio-card, .team-card, .testimonial-card, .faq-item",
);

function revealOnScroll() {
  const trigger = window.innerHeight - 100;

  revealElements.forEach((item) => {
    const top = item.getBoundingClientRect().top;

    if (top < trigger) {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }
  });
}

revealElements.forEach((item) => {
  item.style.opacity = "0";

  item.style.transform = "translateY(40px)";

  item.style.transition = "opacity .7s ease, transform .7s ease";
});

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);
const lazyImages = document.querySelectorAll("img");

if ("loading" in HTMLImageElement.prototype) {
  lazyImages.forEach((image) => {
    image.loading = "lazy";
  });
}

window.addEventListener("load", () => {
  console.log("✅ Images Loaded");
});

console.log("✅ Script Part 2 Loaded");
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector("h3");
  const answer = item.querySelector("p");

  if (!question || !answer) return;

  question.setAttribute("tabindex", "0");
  question.setAttribute("role", "button");
  question.setAttribute("aria-expanded", "false");

  answer.style.display = "none";

  function toggleFAQ() {
    const opened = answer.style.display === "block";

    faqItems.forEach((faq) => {
      const q = faq.querySelector("h3");
      const a = faq.querySelector("p");

      if (a) {
        a.style.display = "none";
      }

      if (q) {
        q.setAttribute("aria-expanded", "false");
      }
    });

    if (!opened) {
      answer.style.display = "block";

      question.setAttribute("aria-expanded", "true");
    }
  }

  question.addEventListener("click", toggleFAQ);

  question.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();

      toggleFAQ();
    }
  });
});
const form = document.querySelector(".contact form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name");

    const email = document.getElementById("email");

    const message = document.getElementById("message");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      alert("Please fill in all required fields.");

      return;
    }

    if (!emailRegex.test(email.value)) {
      alert("Please enter a valid email address.");

      email.focus();

      return;
    }

    alert("✅ Message sent successfully!");

    form.reset();
  });
}

const counters = document.querySelectorAll(".stat-box h2");

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const counter = entry.target;

      const target = parseInt(counter.textContent.replace(/\D/g, ""));

      let count = 0;

      const speed = Math.max(1, target / 80);

      function updateCounter() {
        count += speed;

        if (count < target) {
          counter.textContent = Math.floor(count) + "+";

          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target + "+";
        }
      }

      updateCounter();

      counterObserver.unobserve(counter);
    });
  },
  {
    threshold: 0.5,
  },
);

counters.forEach((counter) => {
  counterObserver.observe(counter);
});

// ===============================
// Accessibility Enhancement
// ===============================

document.querySelectorAll("a").forEach((link) => {
  if (!link.getAttribute("aria-label")) {
    const text = link.textContent.trim();

    if (text) {
      link.setAttribute("aria-label", text);
    }
  }
});

// ===============================
// Performance
// ===============================

window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  console.log("✅ Website Loaded Successfully");
});

console.log("✅ Week 4 JavaScript Loaded");
