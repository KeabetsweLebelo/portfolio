const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");
const projectItems = document.querySelectorAll(".project-item");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

fadeElements.forEach(el => observer.observe(el));

// Add pop-out effect on project hover
projectItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
        item.classList.add("pop-out");
    });
    
    item.addEventListener("mouseleave", () => {
        item.classList.remove("pop-out");
    });
});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});