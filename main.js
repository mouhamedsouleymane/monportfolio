// Initialize Lucide icons
lucide.createIcons();

// Mobile Menu Toggle (Optional but good practice)
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Simple style toggle since it's vanilla
        if (navLinks.classList.contains('active')) {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'rgba(3, 7, 18, 0.95)';
            navLinks.style.webkitBackdropFilter = 'blur(12px)';
            navLinks.style.backdropFilter = 'blur(12px)';
            navLinks.style.padding = '2rem';
            navLinks.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        } else {
            navLinks.style.display = '';
        }
    });
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .section-header, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Add a helper class for revelation
const style = document.createElement('style');
style.textContent = `
    .reveal {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '1rem 0';
        navbar.style.borderBottom = '1px solid rgba(99, 102, 241, 0.2)';
    } else {
        navbar.style.padding = '1.5rem 0';
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
    }
});
