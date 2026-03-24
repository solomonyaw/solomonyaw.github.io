// Initialize Lucide icons
lucide.createIcons();

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Progress Bar
window.addEventListener('scroll', () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById('progress-bar').style.width = scrolled + '%';
});

// Reveal Animations
const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach((el) => {
  gsap.fromTo(el, 
    { 
      opacity: 0, 
      y: 50 
    }, 
    {
      opacity: 1, 
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    }
  );
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Parallax effect for background glows
window.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  const xPos = (clientX / window.innerWidth - 0.5) * 40;
  const yPos = (clientY / window.innerHeight - 0.5) * 40;
  
  gsap.to('.glow-bg', {
    x: xPos,
    y: yPos,
    duration: 2,
    ease: 'power2.out'
  });
});
