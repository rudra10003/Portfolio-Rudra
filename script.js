// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.1)';
    }
});

// Reveal animations on scroll
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));

// Skill bars animation
const skillBars = document.querySelectorAll('.skill-bar');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => skillObserver.observe(bar));

// Contact form
document.getElementById('contact-form').addEventListener('submit', function(e) {
    // Get form data
    const name = this.querySelector('input[name="name"]').value;
    const email = this.querySelector('input[name="email"]').value;
    const message = this.querySelector('textarea[name="message"]').value;
    
    // Create formatted email body
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    
    // Update the form action with formatted data
    this.action = `mailto:rudrapratap99959@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    // Show success message
    const button = this.querySelector('button');
    const originalText = button.innerHTML;
    
    button.innerHTML = '<span class="relative z-10">📧 Opening Email...</span>';
    button.style.background = 'linear-gradient(to right, #10b981, #059669)';
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = 'linear-gradient(to right, #ec4899, #8b5cf6)';
    }, 3000);
});

// Add some interactive particles
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.width = Math.random() * 4 + 1 + 'px';
    particle.style.height = particle.style.width;
    particle.style.animationDelay = Math.random() * 6 + 's';
    
    document.querySelector('.fixed.inset-0').appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 6000);
}

// Create particles periodically
setInterval(createParticle, 2000);

// Add mouse trail effect
let mouseTrail = [];
document.addEventListener('mousemove', function(e) {
    mouseTrail.push({x: e.clientX, y: e.clientY, time: Date.now()});
    
    // Remove old trail points
    mouseTrail = mouseTrail.filter(point => Date.now() - point.time < 1000);
    
    // Create trail effect (simplified for demo)
    if (Math.random() < 0.1) {
        const trail = document.createElement('div');
        trail.style.position = 'fixed';
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        trail.style.width = '4px';
        trail.style.height = '4px';
        trail.style.background = 'rgba(236, 72, 153, 0.6)';
        trail.style.borderRadius = '50%';
        trail.style.pointerEvents = 'none';
        trail.style.zIndex = '9999';
        trail.style.animation = 'fadeOut 1s ease-out forwards';
        
        document.body.appendChild(trail);
        
        setTimeout(() => trail.remove(), 1000);
    }
});

// Job role animation
const jobRoles = [
    'Elite Frontend Developer',
    'UI/UX Designer',
    'Canva Design Expert',
    'Tech Innovator',
    'Digital Creator',
    'Web Developer',
    'Creative Technologist',
    'Frontend Wizard'
];

let currentRoleIndex = 0;
const jobRoleElement = document.getElementById('job-role');

function changeJobRole() {
    // Fade out
    jobRoleElement.style.opacity = '0';
    jobRoleElement.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        // Change text
        currentRoleIndex = (currentRoleIndex + 1) % jobRoles.length;
        jobRoleElement.textContent = jobRoles[currentRoleIndex];
        
        // Fade in
        jobRoleElement.style.opacity = '1';
        jobRoleElement.style.transform = 'translateY(0)';
    }, 500);
}

// Start the animation
setInterval(changeJobRole, 3000);

// Add transition styles
jobRoleElement.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
