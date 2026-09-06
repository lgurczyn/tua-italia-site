document.addEventListener('DOMContentLoaded', function () {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Navbar background on scroll
  var nav = document.getElementById('mainNav');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 60) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  });

  // Active link highlight
  var links = document.querySelectorAll('.nav-link');
  var sections = Array.prototype.map.call(links, function (l) {
    return document.querySelector(l.getAttribute('href'));
  }).filter(Boolean);

  window.addEventListener('scroll', function () {
    var current = sections[0];
    sections.forEach(function (sec) {
      if (window.scrollY >= sec.offsetTop - 140) current = sec;
    });
    links.forEach(function (l) {
      l.classList.toggle('active', l.getAttribute('href') === '#' + current.id);
    });
  });

  // Reveal on scroll
  var revealEls = document.querySelectorAll('.reveal');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(function (el) { io.observe(el); });

  // Collapse mobile menu after clicking a link
  document.querySelectorAll('#navMenu .nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      var menu = document.getElementById('navMenu');
      if (menu.classList.contains('show')) {
        bootstrap.Collapse.getInstance(menu).hide();
      }
    });
  });

  // Hero background carousel
  var slides = document.querySelectorAll('.hero-slide');
  var dots = document.querySelectorAll('.hero-dot');
  if (slides.length) {
    var current = 0;
    var intervalTime = 6000;
    var timer;
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var goTo = function (index) {
      slides[current].classList.remove('active');
      if (dots[current]) dots[current].classList.remove('active');
      current = (index + slides.length) % slides.length;
      slides[current].classList.add('active');
      if (dots[current]) dots[current].classList.add('active');
    };

    var startTimer = function () {
      timer = setInterval(function () { goTo(current + 1); }, intervalTime);
    };

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        goTo(i);
        clearInterval(timer);
        if (!reduceMotion) startTimer();
      });
    });

    if (!reduceMotion) startTimer();
  }
});
