const slides = document.querySelectorAll('.hero-slider .slide');
const next = document.querySelector('.arrow.right');
const prev = document.querySelector('.arrow.left');

let current = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
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

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})

// close menu when clicking any link
document.querySelectorAll("#nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});
// ************************* For second slider
document.addEventListener("DOMContentLoaded", () => {

    const track = document.getElementById("servicesTrack");
    const slides = track.children;

    let index = 0;

    const gap = 30;

    function getVisible() {
        if (window.innerWidth < 768) return 1;
        if (window.innerWidth < 1024) return 2;
        return 3;
    }

    function slide() {
        const visible = getVisible();

        const slideWidth =
            slides[0].offsetWidth + gap;

        index++;

        track.style.transform =
            `translateX(-${index * slideWidth}px)`;

        // seamless reset after half (original set)
        if (index >= slides.length / 2) {

            setTimeout(() => {
                track.style.transition = "none";
                index = 0;
                track.style.transform = "translateX(0)";
            }, 1000);

            setTimeout(() => {
                track.style.transition = "transform 1s linear";
            }, 1100);
        }
    }

    setInterval(slide, 2800);

});
// *********************** Inquiry form

const form = document.getElementById("contactForm");
const popup = document.getElementById("popupOverlay");
const closeBtn = document.getElementById("closePopup");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = Object.fromEntries(
        new FormData(form).entries()
    );

    try {
        const res = await fetch(
            "https://script.google.com/macros/s/AKfycbzgY-hzAZQW4WBpzs94bMYJL_Erwckhz6HEkbDUTc0IoHd_mQZ-zHP4H5B5CiWUZCBS/exec",
            {
                method: "POST",
                body: JSON.stringify(data)
            }
        );

        const result = await res.json();

        if (result.status === "success") {
            popup.classList.add("active");
            form.reset();
        }

    } catch (err) {
        alert("Submission failed. Try again.");
    }

});
document.addEventListener("DOMContentLoaded", () => {

    const backBtn = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            backBtn.classList.add("show");
        } else {
            backBtn.classList.remove("show");
        }
    });

    backBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});




