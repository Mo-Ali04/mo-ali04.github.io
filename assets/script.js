
// Sticky header background change
window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
        header.classList.remove("bg-white");
        header.classList.add("bg-[#FAF6F2]");
    } else {
        header.classList.add("bg-white");
        header.classList.remove("bg-[#FAF6F2]");
    }
});

// Hero background fade-in
window.addEventListener("load", () => {
    document.querySelector(".hero-bg").classList.add("loaded");

    document.querySelectorAll(".fade-in-init").forEach(el => {
        el.classList.add("fade-in-active");
    });
});

// Scroll-triggered fade-in
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-active");
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll(".fade-in-init").forEach(el => {
    observer.observe(el);
});

const filterButtons = document.querySelectorAll(".filter-btn");
const menuItems = document.querySelectorAll(".menu-item");

// Filter menu items based on category
filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const category = btn.getAttribute("data-category");

        menuItems.forEach(item => {
        if (category === "all" || item.classList.contains(category)) {
            item.classList.remove("hidden");
        } else {
            item.classList.add("hidden");
        }
        });

        // Highlight active button
        filterButtons.forEach(b => b.classList.remove("bg-[#D35400]", "text-white"));
        btn.classList.add("bg-[#D35400]", "text-white");
    });
});

// Countdown timer function
function startCountdown(endDate) {
    const countdownEl = document.getElementById("countdown");

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = endDate - now;

        if (distance < 0) {
            countdownEl.innerHTML = "Offer expired!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s remaining`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Set offer countdown
const offerEndDate = new Date();
offerEndDate.setDate( offerEndDate.getDate() + 3 );
startCountdown( offerEndDate.getTime() );

// Testimonial slider functionality
const track = document.getElementById("testimonial-track");
const slides = track.children;
let currentIndex = 0;

function slideTo(index) {
    const offset = -index * 100;
    track.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    slideTo(currentIndex);
}

setInterval(nextSlide, 5000);
