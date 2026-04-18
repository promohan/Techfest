// GSAP Hero Animations
window.addEventListener('DOMContentLoaded', () => {
    const tl = gsap.timeline();

    tl.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
    })
    .from(".hero-subtitle", {
        y: 50,
        opacity: 0,
        duration: 0.8
    }, "-=0.6")
    .from(".hero-btns", {
        scale: 0.8,
        opacity: 0,
        duration: 0.5
    }, "-=0.4")
    .from(".hero-image", {
        x: 100,
        opacity: 0,
        duration: 1
    }, "-=1");
});

// Dark/Light Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Form Validation
const form = document.getElementById('festForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name.length < 3) {
        alert("Please enter a valid name");
        return;
    }

    if (!email.includes('@')) {
        alert("Please enter a valid email");
        return;
    }

    // Success Animation
    gsap.to(".submit-btn", {
        scale: 0.9,
        duration: 0.1,
        yoyo: true,
        repeat: 1
    });
    
    alert("Application Submitted Successfully!");
    form.reset();
});