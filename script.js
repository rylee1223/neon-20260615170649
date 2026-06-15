/* -------------------------------------------------
   Neon Web – JavaScript
   ------------------------------------------------- */

/**
 * Handles the mobile navigation toggle.
 */
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');

  // Toggle navigation visibility on small screens
  navToggle.addEventListener('click', function () {
    const expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !expanded);
    navList.classList.toggle('show');
  });

  /**
   * Simple contact form handler.
   * Prevents default submission and shows a friendly alert.
   */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = this.name.value.trim();
      const email = this.email.value.trim();
      const message = this.message.value.trim();

      if (name && email && message) {
        // In a real project, you'd send this data to a server.
        alert(`Thank you, ${name}! Your message has been received.`);
        this.reset();
      } else {
        alert('Please fill out all fields before submitting.');
      }
    });
  }

  /**
   * Inserts the current year into the footer.
   */
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

/* -------------------------------------------------
   End of Script
   ------------------------------------------------- */