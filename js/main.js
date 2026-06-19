/* ==========================================================================
   Vihasant Sagar Public School — Main JS
   - Mobile menu toggle
   - Active nav highlight
   - Scroll reveal animations
   - Scroll-to-top button
   - Gallery filter
   - Contact form handler
   - Year auto-update in footer
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ----- Mobile menu toggle ----- */
  const menuBtn = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const isOpen = mobileMenu.classList.contains('open');
      menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      // toggle icons
      const openIcon = menuBtn.querySelector('.icon-open');
      const closeIcon = menuBtn.querySelector('.icon-close');
      if (openIcon && closeIcon) {
        openIcon.classList.toggle('hidden', isOpen);
        closeIcon.classList.toggle('hidden', !isOpen);
      }
    });
  }

  /* ----- Active nav link based on URL ----- */
  const currentPage = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = (link.getAttribute('href') || '').toLowerCase();
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ----- Footer current year ----- */
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  /* ----- Scroll reveal ----- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('visible'));
  }

  /* ----- Scroll-to-top button ----- */
  const scrollBtn = document.getElementById('scrollTopBtn');
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('show', window.scrollY > 400);
    });
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ----- Navbar shadow on scroll ----- */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const onScroll = () => {
      if (window.scrollY > 10) {
        navbar.classList.add('shadow-lg');
      } else {
        navbar.classList.remove('shadow-lg');
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
  }

  /* ----- Gallery filter ----- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  if (filterBtns.length && galleryItems.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        galleryItems.forEach(item => {
          const cat = item.dataset.category;
          const show = (filter === 'all' || filter === cat);
          item.style.display = show ? '' : 'none';
        });
      });
    });
  }

  /* ----- Contact form (front-end demo handler) ----- */
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(contactForm).entries());
      if (!data.name || !data.email || !data.message) {
        formStatus.textContent = 'Please fill in all required fields.';
        formStatus.className = 'mt-4 text-red-600 font-medium';
        return;
      }
      // For static deployment, this just shows a success message.
      // Wire up to a backend / Formspree / EmailJS later.
      formStatus.textContent = 'Thank you! Your message has been received. We will reach out soon.';
      formStatus.className = 'mt-4 text-green-600 font-medium';
      contactForm.reset();
    });
  }

  /* ----- Admission form (basic) ----- */
  const admissionForm = document.getElementById('admissionForm');
  const admissionStatus = document.getElementById('admissionStatus');
  if (admissionForm) {
    admissionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      admissionStatus.textContent = 'Enquiry submitted successfully. Our admissions team will contact you shortly.';
      admissionStatus.className = 'mt-4 text-green-600 font-medium';
      admissionForm.reset();
    });
  }
});
