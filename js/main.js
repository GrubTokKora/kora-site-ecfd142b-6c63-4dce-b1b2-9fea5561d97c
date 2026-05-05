/**
 * Main JavaScript for Prime Power Devices Website
 */

// Inject Header and Footer
document.addEventListener('DOMContentLoaded', function() {
  const headerPlaceholder = document.getElementById('header-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');
  
  if (headerPlaceholder && typeof getHeader === 'function') {
    headerPlaceholder.innerHTML = getHeader();
    initMobileMenu();
    initHeaderScroll();
  }
  
  if (footerPlaceholder && typeof getFooter === 'function') {
    footerPlaceholder.innerHTML = getFooter();
    initScrollToTop();
  }

  initScrollReveal();
  initAccordion();
});

// Mobile Menu Toggle
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');

  if (!btn || !menu) return;

  btn.addEventListener('click', function() {
    const isOpen = !menu.classList.contains('hidden');
    if (isOpen) {
      menu.classList.add('hidden');
      menu.style.maxHeight = null;
      iconOpen.classList.remove('hidden');
      iconClose.classList.add('hidden');
    } else {
      menu.classList.remove('hidden');
      menu.style.maxHeight = menu.scrollHeight + 'px';
      iconOpen.classList.add('hidden');
      iconClose.classList.remove('hidden');
    }
  });

  // Close menu when clicking a link
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      iconOpen.classList.remove('hidden');
      iconClose.classList.add('hidden');
    });
  });
}

// Header scroll effect
function initHeaderScroll() {
  const header = document.getElementById('main-header');
  if (!header) return;

  let lastScroll = 0;
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
    
    lastScroll = currentScroll;
  });
}

// Scroll to Top Button
function initScrollToTop() {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 500) {
      btn.classList.remove('opacity-0', 'invisible');
      btn.classList.add('opacity-100', 'visible');
    } else {
      btn.classList.add('opacity-0', 'invisible');
      btn.classList.remove('opacity-100', 'visible');
    }
  });

  btn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Scroll Reveal Animation using Intersection Observer
function initScrollReveal() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
    observer.observe(el);
  });
}

// Accordion functionality
function initAccordion() {
  document.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      const content = this.nextElementSibling;
      
      // Close all others in the same group
      const group = this.closest('.accordion-group');
      if (group) {
        group.querySelectorAll('.accordion-btn').forEach(otherBtn => {
          if (otherBtn !== this) {
            otherBtn.setAttribute('aria-expanded', 'false');
            otherBtn.nextElementSibling.classList.remove('open');
          }
        });
      }
      
      this.setAttribute('aria-expanded', !expanded);
      if (!expanded) {
        content.classList.add('open');
      } else {
        content.classList.remove('open');
      }
    });
  });
}

// Form submission handler
function handleFormSubmit(event, formId) {
  event.preventDefault();
  const form = document.getElementById(formId);
  if (!form) return;
  
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn.innerHTML;
  btn.innerHTML = '<span class="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>';
  btn.disabled = true;
  
  setTimeout(() => {
    btn.innerHTML = 'Submitted!';
    btn.classList.add('bg-green-600');
    form.reset();
    
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.classList.remove('bg-green-600');
      btn.disabled = false;
    }, 2000);
  }, 1500);
}
