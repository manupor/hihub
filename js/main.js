/**
 * HiHub Global - Main JavaScript
 * Funcionalidades: FAQ Accordion, Form handling, smooth scroll
 */

document.addEventListener('DOMContentLoaded', function() {
  // FAQ Accordion
  initFaqAccordion();
  
  // Contact Form
  initContactForm();
  
  // Lead Magnet Form
  initLeadMagnetForm();
  
  // Smooth scroll for anchor links
  initSmoothScroll();
  
  // Header scroll effect
  initHeaderScroll();
});

/**
 * FAQ Accordion functionality
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', function() {
      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      item.classList.toggle('active');
    });
  });
}

/**
 * Contact Form handling
 */
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());
      
      // Basic validation
      if (!data.nombre || !data.email || !data.telefono) {
        alert('Por favor complete todos los campos obligatorios.');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        alert('Por favor ingrese un email válido.');
        return;
      }
      
      // Simulate form submission
      submitForm(contactForm, data);
    });
  }
}

/**
 * Submit form data (simulated)
 */
function submitForm(form, data) {
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  const successMessage = form.querySelector('.form-success');
  
  // Show loading state
  submitBtn.disabled = true;
  submitBtn.textContent = 'Enviando...';
  
  // Simulate API call
  setTimeout(() => {
    // Hide form fields
    const formFields = form.querySelectorAll('.form-group, button[type="submit"]');
    formFields.forEach(field => field.style.display = 'none');
    
    // Show success message
    if (successMessage) {
      successMessage.classList.add('visible');
      successMessage.innerHTML = `
        <strong>¡Gracias ${data.nombre}!</strong><br>
        Hemos recibido tu solicitud. Te contactaremos en menos de 24 horas.
        <br><br>
        También hemos enviado un email de confirmación a ${data.email}
      `;
    }
    
    // Reset button (for future use)
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
    
    // Log form data (for debugging)
    console.log('Form submitted:', data);
    
  }, 1500);
}

/**
 * Lead Magnet Form handling
 */
function initLeadMagnetForm() {
  const leadForm = document.getElementById('leadMagnetForm');
  
  if (leadForm) {
    leadForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const emailInput = leadForm.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      
      if (!email) {
        alert('Por favor ingrese su email.');
        return;
      }
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Por favor ingrese un email válido.');
        return;
      }
      
      // Simulate download
      const submitBtn = leadForm.querySelector('button');
      submitBtn.textContent = 'Descargando...';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        alert(`¡Gracias! La guía ha sido enviada a ${email}`);
        submitBtn.textContent = 'Descargar gratis';
        submitBtn.disabled = false;
        emailInput.value = '';
      }, 1000);
    });
  }
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Header scroll effect
 */
function initHeaderScroll() {
  const header = document.querySelector('.header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    // Add shadow on scroll
    if (currentScroll > 50) {
      header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
  });
}

/**
 * Intersection Observer for animations
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('[data-animate]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  animatedElements.forEach(el => observer.observe(el));
}

// Initialize scroll animations if elements exist
document.addEventListener('DOMContentLoaded', function() {
  if (document.querySelectorAll('[data-animate]').length > 0) {
    initScrollAnimations();
  }
});
