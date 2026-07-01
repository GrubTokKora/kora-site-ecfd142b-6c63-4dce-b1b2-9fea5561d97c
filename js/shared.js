/**
 * Shared Header and Footer for Prime Power Devices
 * Dynamically injected via JS strings
 */

function getHeader() {
  return `
    <!-- Top Bar -->
    <div class="bg-black text-white text-center py-2 text-sm tracking-wide">
      <span class="animate-pulse">Made In INDIA 🇮🇳</span>
    </div>

    <!-- Navigation -->
    <header id="main-header" class="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 lg:h-20">
          <!-- Logo -->
          <a href="index.html" class="flex items-center gap-2 shrink-0 group">
            <img src="https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/ecfd142b-6c63-4dce-b1b2-9fea5561d97c/311c03ab-5bbb-4b23-9fee-4b0e03864786/1781757336_x9yrsf.jpg" alt="Prime Power Devices" class="h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105">
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex items-center gap-8">
            <a href="index.html" class="nav-link text-gray-700 hover:text-blue-800 font-medium text-sm uppercase tracking-wide transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-red-600 after:transition-all hover:after:w-full">Home</a>
            <a href="devices.html" class="nav-link text-gray-700 hover:text-blue-800 font-medium text-sm uppercase tracking-wide transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-red-600 after:transition-all hover:after:w-full">Devices</a>
            <a href="about.html" class="nav-link text-gray-700 hover:text-blue-800 font-medium text-sm uppercase tracking-wide transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-red-600 after:transition-all hover:after:w-full">About Us</a>
            <a href="contact.html" class="nav-link text-gray-700 hover:text-blue-800 font-medium text-sm uppercase tracking-wide transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-red-600 after:transition-all hover:after:w-full">Contact Us</a>
          </nav>

          <!-- Mobile Menu Button -->
          <button id="mobile-menu-btn" class="lg:hidden p-2 text-gray-700 hover:text-blue-800 transition-colors" aria-label="Toggle menu">
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
    <footer class="bg-gray-900 text-white py-8 border-t border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-gray-400 text-sm">2025 &copy; All Rights Reserved.</p>
          <nav class="flex items-center gap-6">
            <a href="contact.html" class="text-gray-400 hover:text-white text-sm transition-colors">Contact Us</a>
            <a href="about.html" class="text-gray-400 hover:text-white text-sm transition-colors">About Us</a>
          </nav>
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
