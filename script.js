// Fleety Website JavaScript

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const navbarHeight = 80;
        const elementPosition = element.offsetTop - navbarHeight;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Toggle mobile menu
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
}

// Show/hide download dropdown
function showDownloadDropdown() {
    const dropdown = document.getElementById('downloadDropdown');
    if (dropdown) {
        dropdown.classList.remove('hidden');
    }
}

function hideDownloadDropdown() {
    const dropdown = document.getElementById('downloadDropdown');
    if (dropdown) {
        dropdown.classList.add('hidden');
    }
}

// Handle waitlist form submission
function handleWaitlistSubmit(event) {
    event.preventDefault();
    const emailInput = document.getElementById('waitlistEmail');
    const email = emailInput.value;
    
    // Here you would typically send this to your backend
    console.log('Waitlist email submitted:', email);
    
    // Show success message
    alert('Thank you! We\'ll notify you when Fleety launches in your area.');
    
    // Clear the input
    emailInput.value = '';
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        if (!mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
            toggleMobileMenu();
        }
    }
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-xl');
    } else {
        navbar.classList.remove('shadow-xl');
    }
});

// Close download dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('downloadDropdown');
    const downloadBtn = event.target.closest('button');
    
    if (dropdown && !dropdown.classList.contains('hidden')) {
        if (!dropdown.contains(event.target) && (!downloadBtn || !downloadBtn.textContent.includes('Download App'))) {
            hideDownloadDropdown();
        }
    }
});