// Mobile Menu Toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const mobileMenuClose = document.querySelector('.mobile-menu-close');

function openMobileMenu() {
    mobileMenu.classList.add('translate-x-0');
    mobileMenu.classList.remove('-translate-x-full');
    mobileMenuOverlay.classList.remove('hidden');
    // Add a small delay to allow the overlay to become visible before fading in
    setTimeout(() => {
        mobileMenuOverlay.classList.add('opacity-50');
    }, 10);
}

function closeMobileMenu() {
    mobileMenu.classList.remove('translate-x-0');
    mobileMenu.classList.add('-translate-x-full');
    mobileMenuOverlay.classList.remove('opacity-50');
    // Add a small delay before hiding the overlay completely
    setTimeout(() => {
        mobileMenuOverlay.classList.add('hidden');
    }, 300); // Duration should match CSS transition duration
}

mobileMenuButton.addEventListener('click', () => {
    openMobileMenu();
});

mobileMenuClose.addEventListener('click', () => {
    closeMobileMenu();
});

mobileMenuOverlay.addEventListener('click', () => {
    closeMobileMenu();
});

// Close mobile menu when navigation link is clicked (for smooth scrolling)
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        // Let the smooth scroll handler take care of preventDefault
        closeMobileMenu();
    });
});

// // Header Scroll Effect
// const header = document.getElementById('mainHeader');
// let lastScroll = 0;

// window.addEventListener('scroll', () => {
//     const currentScroll = window.pageYOffset;

//     // Add/remove header-scrolled class based on scroll position
//     // if (currentScroll > 50) {
//     //     header.classList.add('header-scrolled');
//     // } else {
//     //     header.classList.remove('header-scrolled');
//     // }

//     // Hide/show header based on scroll direction
//     if (currentScroll > lastScroll && currentScroll > 100) {
//         header.style.transform = 'translateY(-100%)';
//         header.style.transform = 'translateY(-0%)';
//     } else {
//         header.style.transform = 'translateY(0)';
//     }

//     lastScroll = currentScroll;
// });

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Only prevent default and scroll if href is not just "#"
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                // Smooth scroll to target
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add fade-in animation to elements when they come into view
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all navigation links for animation
document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    observer.observe(link);
});



// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Toggle active class on question
            question.classList.toggle('active');
            
            // Get the answer element
            const answer = question.nextElementSibling;
            
            // Toggle show class on answer
            answer.classList.toggle('show');
            
            // Close other answers
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    otherQuestion.classList.remove('active');
                    otherQuestion.nextElementSibling.classList.remove('show');
                }
            });
        });
    });
});