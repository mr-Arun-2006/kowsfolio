// Cursor glow follows pointer
const glow = document.getElementById('cursorGlow');
window.addEventListener('mousemove', (e) => {
  if (!glow) return;
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

// Nav background intensifies on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    nav.style.boxShadow = '0 8px 24px rgba(0,0,0,0.35)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// 3D tilt on hero ECG card following mouse
const ecgCard = document.querySelector('.ecg-card');
const heroVisual = document.querySelector('.hero-visual');
if (ecgCard && heroVisual) {
  heroVisual.addEventListener('mousemove', (e) => {
    const rect = heroVisual.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    ecgCard.style.transform = `rotateX(${(-y * 14).toFixed(2)}deg) rotateY(${(x * 18).toFixed(2)}deg)`;
  });
  heroVisual.addEventListener('mouseleave', () => {
    ecgCard.style.transform = '';
  });
}

// Generic 3D tilt for any card with .skill-card, .future-card, .intern-card, .activity-card
const tiltCards = document.querySelectorAll('.skill-card, .future-card, .intern-card, .activity-card, .stat-card, .timeline-card');
tiltCards.forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(900px) rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(x * 10).toFixed(2)}deg) translateY(-6px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// Scroll-reveal for sections
const revealEls = document.querySelectorAll('.section, .hero');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.12 });

revealEls.forEach((el) => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity .7s ease, transform .7s ease';
  observer.observe(el);
});

// Hero is visible immediately on load
window.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  if (hero) {
    setTimeout(() => {
      hero.style.opacity = 1;
      hero.style.transform = 'translateY(0)';
    }, 80);
  }
});
