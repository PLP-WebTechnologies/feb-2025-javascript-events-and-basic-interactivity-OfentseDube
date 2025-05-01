// Form validation and interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Get the contact form
    const contactForm = document.getElementById('contactForm');
    
    // Add form validation
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form inputs
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validation flags
            let isValid = true;
            let errorMessage = '';
            
            // Name validation
            if (name === '') {
                isValid = false;
                errorMessage += 'Please enter your name.\n';
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                isValid = false;
                errorMessage += 'Please enter a valid email address.\n';
            }
            
            // Message validation
            if (message === '') {
                isValid = false;
                errorMessage += 'Please enter your message.\n';
            }
            
            // Display validation result
            const validationMessage = document.getElementById('validationMessage');
            if (validationMessage) {
                if (isValid) {
                    validationMessage.textContent = 'Form submitted successfully!';
                    validationMessage.className = 'success-message';
                    // Here you would typically send the form data to a server
                    contactForm.reset();
                } else {
                    validationMessage.textContent = errorMessage;
                    validationMessage.className = 'error-message';
                }
            }
        });
    }
    
    // Add interactive elements to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        // Add hover effect
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        
        // Add click effect
        card.addEventListener('click', function() {
            const serviceTitle = this.querySelector('h3').textContent;
            alert(`You selected: ${serviceTitle}`);
        });
    });
    
    // Add smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}); 