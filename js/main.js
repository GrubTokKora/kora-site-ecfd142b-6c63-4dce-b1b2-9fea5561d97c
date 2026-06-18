/**
 * Main JavaScript for Prime Power Devices Website
 */

// Shared runtime config for form/newsletter APIs.
window.KORA_SITE_CONFIG = window.KORA_SITE_CONFIG || {
  apiBaseUrl: 'https://kora-agent.grubtok.com',
  businessId: 'ecfd142b-6c63-4dce-b1b2-9fea5561d97c',
  recaptchaSiteKey: '6LcsdJYsAAAAAAur-h7cYlZuGJTmijNHmOi5kFH7'
};

// Inject Header and Footer
document.addEventListener('DOMContentLoaded', function () {
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
  initContactRecaptcha();
  initNewsletterForm();
});

// Mobile Menu Toggle
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');

  if (!btn || !menu) return;

  btn.addEventListener('click', function () {
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
  window.addEventListener('scroll', function () {
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

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 500) {
      btn.classList.remove('opacity-0', 'invisible');
      btn.classList.add('opacity-100', 'visible');
    } else {
      btn.classList.add('opacity-0', 'invisible');
      btn.classList.remove('opacity-100', 'visible');
    }
  });

  btn.addEventListener('click', function () {
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
    btn.addEventListener('click', function () {
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

/** reCAPTCHA widget id for contact page (explicit render). */
let koraContactRecaptchaWidgetId = null;
let koraContactRecaptchaLoading = false;

function loadContactRecaptchaScript() {
  const cfg = window.KORA_SITE_CONFIG || {};
  if (!cfg.recaptchaSiteKey) return Promise.resolve(false);
  if (typeof grecaptcha !== 'undefined' && grecaptcha.render) return Promise.resolve(true);

  if (koraContactRecaptchaLoading) {
    return new Promise(function (resolve) {
      const check = setInterval(function () {
        if (typeof grecaptcha !== 'undefined' && grecaptcha.render) {
          clearInterval(check);
          resolve(true);
        }
      }, 100);
      setTimeout(function () {
        clearInterval(check);
        resolve(typeof grecaptcha !== 'undefined' && !!grecaptcha.render);
      }, 8000);
    });
  }

  koraContactRecaptchaLoading = true;
  return new Promise(function (resolve) {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
    script.async = true;
    script.defer = true;
    script.onload = function () { resolve(true); };
    script.onerror = function () { resolve(false); };
    document.head.appendChild(script);
  });
}

async function renderContactRecaptcha(showErrors) {
  const el = document.getElementById('contact-recaptcha');
  const cfg = window.KORA_SITE_CONFIG || {};
  if (!el || !cfg.recaptchaSiteKey) {
    if (showErrors) setContactFormMessage('Form temporarily unavailable.', true);
    return false;
  }

  const ready = await loadContactRecaptchaScript();
  if (!ready || typeof grecaptcha === 'undefined') {
    if (showErrors) setContactFormMessage('Security check loading. Please try again.', true);
    return false;
  }

  if (koraContactRecaptchaWidgetId == null) {
    koraContactRecaptchaWidgetId = grecaptcha.render('contact-recaptcha', {
      sitekey: cfg.recaptchaSiteKey
    });
  }
  return true;
}

function initContactRecaptcha() {
  const form = document.getElementById('contact-form');
  if (!form || !document.getElementById('contact-recaptcha')) return;

  function preloadRecaptcha() {
    renderContactRecaptcha(false);
  }

  form.addEventListener('focusin', preloadRecaptcha, { once: true });
  form.addEventListener('pointerdown', preloadRecaptcha, { once: true });
}

function setContactFormMessage(text, isError) {
  const msgEl = document.getElementById('contact-form-message');
  if (!msgEl) return;
  msgEl.textContent = text || '';
  msgEl.classList.remove('text-red-600', 'text-green-600', 'text-gray-600');
  msgEl.classList.add(isError ? 'text-red-600' : text ? 'text-green-600' : 'text-gray-600');
}

function resetContactRecaptcha() {
  if (typeof grecaptcha === 'undefined') return;
  if (koraContactRecaptchaWidgetId != null) {
    grecaptcha.reset(koraContactRecaptchaWidgetId);
  } else {
    grecaptcha.reset();
  }
}

function setNewsletterMessage(text, isError) {
  const msgEl = document.getElementById('newsletter-message');
  if (!msgEl) return;
  msgEl.textContent = text || '';
  msgEl.classList.remove('text-red-600', 'text-green-600', 'text-gray-600');
  msgEl.classList.add(isError ? 'text-red-600' : text ? 'text-green-600' : 'text-gray-600');
}

/**
 * Kora public newsletter API — mirrors kora-agent app/api/v1/public_newsletter.py
 * POST {apiBaseUrl}/api/v1/public/newsletter/subscribe
 */
function initNewsletterForm() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;

  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    const cfg = window.KORA_SITE_CONFIG || {};
    const apiBaseUrl = (cfg.apiBaseUrl || '').replace(/\/+$/, '');
    const businessId = cfg.businessId;

    if (!apiBaseUrl || !businessId) {
      setNewsletterMessage('Newsletter is not configured. Please try again later.', true);
      return;
    }

    const emailInput = document.getElementById('newsletter-email');
    const email = emailInput ? (emailInput.value || '').trim() : '';
    if (!email) {
      setNewsletterMessage('Please enter your email.', true);
      return;
    }

    const submitBtn = document.getElementById('newsletter-submit-btn');
    const originalHtml = submitBtn ? submitBtn.innerHTML : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML =
        '<span class="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>';
    }
    setNewsletterMessage('', false);

    try {
      const res = await fetch(apiBaseUrl + '/api/v1/public/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          business_id: businessId,
          email: email,
          email_opt_in: true,
          source: 'website_widget'
        })
      });

      const data = await res.json().catch(function () {
        return {};
      });

      if (!res.ok) {
        const detail = data.detail;
        const message =
          typeof detail === 'string'
            ? detail
            : Array.isArray(detail)
              ? detail.map(function (d) { return d.msg || d.message || ''; }).filter(Boolean).join(' ')
              : 'Subscription failed. Please try again.';
        setNewsletterMessage(message || 'Subscription failed. Please try again.', true);
        if (submitBtn) {
          submitBtn.innerHTML = originalHtml;
          submitBtn.disabled = false;
        }
        return;
      }

      setNewsletterMessage('Subscribed successfully. Thank you!', false);
      form.reset();
      if (submitBtn) {
        submitBtn.classList.add('bg-green-600');
        submitBtn.innerHTML = 'Done';
        setTimeout(function () {
          submitBtn.innerHTML = originalHtml;
          submitBtn.classList.remove('bg-green-600');
          submitBtn.disabled = false;
        }, 2000);
      }
    } catch (e) {
      setNewsletterMessage('Network error. Please try again.', true);
      if (submitBtn) {
        submitBtn.innerHTML = originalHtml;
        submitBtn.disabled = false;
      }
    }
  });
}

/**
 * Kora public forms API — mirrors kora-agent app/api/v1/public_forms.py
 * POST {apiBaseUrl}/api/v1/public/forms/submit
 */
async function handleFormSubmit(event, formId) {
  event.preventDefault();
  const form = document.getElementById(formId);
  if (!form || formId !== 'contact-form') return;

  const cfg = window.KORA_SITE_CONFIG || {};
  const apiBaseUrl = (cfg.apiBaseUrl || '').replace(/\/+$/, '');
  const businessId = cfg.businessId;

  if (!apiBaseUrl || !businessId) {
    setContactFormMessage('Form is not configured. Please try again later.', true);
    return;
  }

  if (!cfg.recaptchaSiteKey) {
    setContactFormMessage('Form temporarily unavailable.', true);
    return;
  }

  const recaptchaReady = await renderContactRecaptcha(true);
  if (!recaptchaReady) return;

  const captchaToken =
    typeof grecaptcha !== 'undefined' && koraContactRecaptchaWidgetId != null
      ? grecaptcha.getResponse(koraContactRecaptchaWidgetId)
      : typeof grecaptcha !== 'undefined'
        ? grecaptcha.getResponse()
        : '';

  if (!captchaToken) {
    setContactFormMessage('Please complete the reCAPTCHA verification.', true);
    return;
  }

  const fd = new FormData(form);
  const name = (fd.get('name') || '').toString().trim();
  const phone = (fd.get('phone') || '').toString().trim();
  const email = (fd.get('email') || '').toString().trim();
  const query = (fd.get('query') || '').toString().trim();

  if (!name || !phone || !email || !query) {
    setContactFormMessage('Please fill in all fields.', true);
    return;
  }

  const btn = form.querySelector('button[type="submit"]');
  const originalHtml = btn ? btn.innerHTML : '';
  if (btn) {
    btn.disabled = true;
    btn.innerHTML =
      '<span class="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>';
  }
  setContactFormMessage('', false);

  try {
    const res = await fetch(apiBaseUrl + '/api/v1/public/forms/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        business_id: businessId,
        form_type: 'contact',
        form_data: {
          name: name,
          phone: phone,
          query: query
        },
        submitter_email: email,
        captcha_token: captchaToken
      })
    });

    const data = await res.json().catch(function () {
      return {};
    });

    if (!res.ok) {
      const detail = data.detail;
      const message =
        typeof detail === 'string'
          ? detail
          : Array.isArray(detail)
            ? detail.map(function (d) { return d.msg || d.message || ''; }).filter(Boolean).join(' ')
            : 'Something went wrong. Please try again.';
      setContactFormMessage(message || 'Submission failed.', true);
      resetContactRecaptcha();
      if (btn) {
        btn.innerHTML = originalHtml;
        btn.disabled = false;
      }
      return;
    }

    setContactFormMessage(data.message || 'Thank you — we received your message.', false);
    form.reset();
    resetContactRecaptcha();
    if (btn) {
      btn.classList.add('bg-green-600');
      btn.innerHTML = 'Submitted!';
      setTimeout(function () {
        btn.innerHTML = originalHtml;
        btn.classList.remove('bg-green-600');
        btn.disabled = false;
      }, 2500);
    }
  } catch (e) {
    setContactFormMessage('Network error. Please check your connection and try again.', true);
    resetContactRecaptcha();
    if (btn) {
      btn.innerHTML = originalHtml;
      btn.disabled = false;
    }
  }
}
