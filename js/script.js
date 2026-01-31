const slides = document.querySelectorAll('.hero-slider .slide');
const next = document.querySelector('.arrow.right');
const prev = document.querySelector('.arrow.left');

let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if(i === index) slide.classList.add('active');
  });
}

next.addEventListener('click', () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

prev.addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

// Optional: auto slide every 5 seconds
setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 5000);


// script for hamburger
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', ()=>{
    navLinks.classList.toggle('active');
})
