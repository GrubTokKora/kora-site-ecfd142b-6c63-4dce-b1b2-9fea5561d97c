/**
 * Shared Header and Footer for Prime Power Devices
 * Dynamically injected via JS strings
 */

function getHeader() {
  return `
    <div id="site-header" class="fixed top-0 w-full z-50 overflow-x-hidden">
      <!-- Top Bar -->
      <div class="bg-black text-white text-center py-2 text-sm tracking-wide">
        <span class="animate-pulse">Made In INDIA 🇮🇳</span>
      </div>

      <!-- Navigation -->
      <header id="main-header" class="bg-white shadow-sm transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20 lg:h-[6rem] min-w-0">
          <!-- Logo -->
          <a href="index.html" class="flex items-center min-w-0 group">
            <img src="https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/ecfd142b-6c63-4dce-b1b2-9fea5561d97c/311c03ab-5bbb-4b23-9fee-4b0e03864786/1781757336_x9yrsf.jpg" alt="Prime Power Devices" class="h-16 lg:h-20 w-auto max-w-[13rem] lg:max-w-none object-contain transition-transform duration-300 group-hover:scale-105">
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex items-center gap-8">
            <a href="index.html" class="nav-link text-gray-700 hover:text-blue-800 font-medium text-sm uppercase tracking-wide transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-red-600 after:transition-all hover:after:w-full">Home</a>
            <a href="devices.html" class="nav-link text-gray-700 hover:text-blue-800 font-medium text-sm uppercase tracking-wide transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-red-600 after:transition-all hover:after:w-full">Devices</a>
            <a href="about.html" class="nav-link text-gray-700 hover:text-blue-800 font-medium text-sm uppercase tracking-wide transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-red-600 after:transition-all hover:after:w-full">About Us</a>
            <a href="contact.html" class="nav-link text-gray-700 hover:text-blue-800 font-medium text-sm uppercase tracking-wide transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-red-600 after:transition-all hover:after:w-full">Contact Us</a>
          </nav>

          <!-- Mobile Menu Button -->
          <button id="mobile-menu-btn" class="lg:hidden p-2 text-gray-700 hover:text-blue-800 transition-colors shrink-0" aria-label="Toggle menu" aria-expanded="false" type="button">
            <svg id="menu-icon-open" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            <svg id="menu-icon-close" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div id="mobile-menu" class="lg:hidden hidden bg-white border-t border-gray-100">
        <div class="px-4 py-4 space-y-3">
          <a href="index.html" class="block py-2 text-gray-700 hover:text-blue-800 font-medium transition-colors">Home</a>
          <a href="devices.html" class="block py-2 text-gray-700 hover:text-blue-800 font-medium transition-colors">Devices</a>
          <a href="about.html" class="block py-2 text-gray-700 hover:text-blue-800 font-medium transition-colors">About Us</a>
          <a href="contact.html" class="block py-2 text-gray-700 hover:text-blue-800 font-medium transition-colors">Contact Us</a>
        </div>
      </div>
    </header>
    </div>
    <div class="h-[7.25rem] lg:h-[8.25rem]" aria-hidden="true"></div>
  `;
}

function getFooter() {
  return `
    <!-- Contact CTA Section -->
    <section class="bg-slate-50 py-16">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-4 reveal">Subscribe for latest news</h2>
        <div class="w-16 h-1 bg-red-600 mx-auto mb-8 reveal"></div>

        <form id="newsletter-form" class="max-w-xl mx-auto flex gap-2 reveal">
          <label for="newsletter-email" class="sr-only">Email</label>
          <input id="newsletter-email" name="newsletter-email" type="email" placeholder="Enter your mail" class="flex-1 px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent transition-all" required>
          <button id="newsletter-submit-btn" type="submit" class="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </form>
        <p id="newsletter-message" class="mt-3 text-sm text-gray-600 min-h-[1.25rem]" role="status" aria-live="polite"></p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white pt-16 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <!-- About/Logo Column -->
          <div class="lg:col-span-2">
            <a href="index.html" class="inline-block mb-4">
              <img src="https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/ecfd142b-6c63-4dce-b1b2-9fea5561d97c/de8c94d8-887e-4625-825f-ec262dbc28df/1777958569_6k3onm.png" alt="Prime Power Devices Logo" class="h-16 w-auto object-contain" loading="lazy">
            </a>
            <p class="text-gray-400 text-sm max-w-md">High-performance TO-3, TO-3P, and TO-220 power transistors since 2001.</p>
          </div>

          <!-- Quick Links Column -->
          <div>
            <h3 class="text-lg font-semibold mb-4 tracking-wide">Quick Links</h3>
            <nav class="space-y-3 text-sm">
              <a href="index.html" class="block text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="devices.html" class="block text-gray-400 hover:text-white transition-colors">Devices</a>
              <a href="about.html" class="block text-gray-400 hover:text-white transition-colors">About Us</a>
              <a href="contact.html" class="block text-gray-400 hover:text-white transition-colors">Contact Us</a>
            </nav>
          </div>

          <!-- Contact/Address Column -->
          <div>
            <h3 class="text-lg font-semibold mb-4 tracking-wide">Contact Us</h3>
            <address class="not-italic text-gray-400 space-y-3 text-sm">
              <p><strong>M/s PRIME POWER DEVICES</strong><br>
              FACTORY: 5-91/2/1, Survey No: 75A/2B & 76A/1, Bakaram Village, Moinabad Mandal, R R Dist<br>
              HYDERABAD</p>
              <p><a href="mailto:info@primepowerdevices.com" class="hover:text-white transition-colors inline-flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                info@primepowerdevices.com
              </a></p>
              <p><a href="tel:+919848033031" class="hover:text-white transition-colors inline-flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                +91 9848033031
              </a></p>
            </address>
          </div>

        </div>
        <div class="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; ${new Date().getFullYear()} Prime Power Devices. All Rights Reserved.</p>
        </div>
      </div>
    </footer>

    <!-- Scroll to Top Button -->
    <button id="scroll-top" class="fixed bottom-6 right-6 bg-blue-800 text-white p-3 rounded-full shadow-lg opacity-0 invisible transition-all duration-300 hover:bg-red-600 hover:scale-110 z-40" aria-label="Scroll to top">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
    </button>
  `;
}

// Export for use in pages
window.getHeader = getHeader;
window.getFooter = getFooter;
