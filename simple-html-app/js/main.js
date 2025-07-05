window.addEventListener('load', () => {
  // Loader fade out
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => loader.style.display = 'none', 700);
  }, 1200);

  // GSAP hero text animation
  gsap.from('.hero-title', {
    y: 60,
    opacity: 0,
    duration: 1.2,
    ease: 'power4.out',
    delay: 0.5
  });
  gsap.from('.hero-subtitle', {
    y: 40,
    opacity: 0,
    duration: 1.1,
    ease: 'power4.out',
    delay: 1.1
  });
});

// Animate project cards in on scroll
window.addEventListener('DOMContentLoaded', () => {
  if (window.gsap && window.gsap.registerPlugin) {
    gsap.registerPlugin(ScrollTrigger);
  }
  if (window.ScrollTrigger) {
    gsap.utils.toArray('.project-card').forEach((card, i) => {
      gsap.from(card, {
        y: 60,
        opacity: 0,
        duration: 1.1,
        ease: 'power4.out',
        delay: 0.1 + i * 0.08,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      });
    });
  }

  // Parallax effect on project images
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const img = card.querySelector('.project-img');
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const moveX = (x / rect.width - 0.5) * 16;
      const moveY = (y / rect.height - 0.5) * 16;
      img.style.transform = `scale(1.04) translate(${moveX}px, ${moveY}px)`;
    });
    card.addEventListener('mouseleave', () => {
      const img = card.querySelector('.project-img');
      img.style.transform = '';
    });
  });
});

// About section layered text animation
window.addEventListener('DOMContentLoaded', () => {
  if (window.ScrollTrigger) {
    gsap.from('.about-headline', {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.about-headline',
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    });
    gsap.from('.about-subheadline', {
      y: 40,
      opacity: 0,
      duration: 1.1,
      ease: 'power4.out',
      delay: 0.2,
      scrollTrigger: {
        trigger: '.about-subheadline',
        start: 'top 85%',
        toggleActions: 'play none none none',
      }
    });
    gsap.from('.about-desc', {
      y: 30,
      opacity: 0,
      duration: 1.1,
      ease: 'power4.out',
      delay: 0.4,
      scrollTrigger: {
        trigger: '.about-desc',
        start: 'top 90%',
        toggleActions: 'play none none none',
      }
    });
  }
});

// Contact section animation
window.addEventListener('DOMContentLoaded', () => {
  if (window.ScrollTrigger) {
    gsap.from('.contact-headline', {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.contact-headline',
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    });
    gsap.from('.contact-form .form-row', {
      y: 30,
      opacity: 0,
      duration: 1.1,
      ease: 'power4.out',
      stagger: 0.13,
      delay: 0.2,
      scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 85%',
        toggleActions: 'play none none none',
      }
    });
    gsap.from('.contact-btn', {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)',
      delay: 0.5,
      scrollTrigger: {
        trigger: '.contact-btn',
        start: 'top 90%',
        toggleActions: 'play none none none',
      }
    });
    gsap.from('.contact-socials .social-icon', {
      y: 20,
      opacity: 0,
      duration: 0.7,
      ease: 'power4.out',
      stagger: 0.12,
      delay: 0.7,
      scrollTrigger: {
        trigger: '.contact-socials',
        start: 'top 95%',
        toggleActions: 'play none none none',
      }
    });
  }
});

// Music toggle logic
const musicToggle = document.getElementById('music-toggle');
const musicIcon = document.getElementById('music-icon');
const musicWave = document.getElementById('music-wave');
const bgMusic = document.getElementById('bg-music');
let musicPlaying = false;

function setMusicState(playing) {
  if (playing) {
    musicToggle.classList.add('active');
    musicWave.setAttribute('stroke', '#FF00C8');
    bgMusic.volume = 0.7;
    bgMusic.play();
  } else {
    musicToggle.classList.remove('active');
    musicWave.setAttribute('stroke', '#00FFF7');
    bgMusic.pause();
  }
}

musicToggle.addEventListener('click', () => {
  musicPlaying = !musicPlaying;
  setMusicState(musicPlaying);
});

// Fade out music on page hide
window.addEventListener('beforeunload', () => {
  bgMusic.pause();
  bgMusic.currentTime = 0;
});

// Neon cursor logic
const neonCursor = document.getElementById('neon-cursor');
let cursorX = window.innerWidth / 2, cursorY = window.innerHeight / 2;
let targetX = cursorX, targetY = cursorY;

document.addEventListener('mousemove', e => {
  targetX = e.clientX;
  targetY = e.clientY;
  neonCursor.style.opacity = '1';
});
function animateCursor() {
  cursorX += (targetX - cursorX) * 0.22;
  cursorY += (targetY - cursorY) * 0.22;
  neonCursor.style.left = cursorX + 'px';
  neonCursor.style.top = cursorY + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.addEventListener('mousedown', () => {
  neonCursor.classList.add('cursor-down');
});
document.addEventListener('mouseup', () => {
  neonCursor.classList.remove('cursor-down');
});

// Highlight on hover over interactive elements
const hoverables = ['a', 'button', 'input', 'textarea', '.project-card', '.social-icon'];
document.body.addEventListener('mouseover', e => {
  if (hoverables.some(sel => e.target.closest(sel))) {
    neonCursor.classList.add('cursor-hover');
  }
});
document.body.addEventListener('mouseout', e => {
  if (hoverables.some(sel => e.target.closest(sel))) {
    neonCursor.classList.remove('cursor-hover');
  }
}); 