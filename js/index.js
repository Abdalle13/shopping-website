  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 150); 
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => {
    observer.observe(card);
  });

const form = document.querySelector(".contact-form form");
form.addEventListener("submit", function(event) {
  event.preventDefault(); 
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log("Form submitted:", data);
  form.reset(); 
  alert("Thank you for your message! We will get back to you soon.");
});


const mobileMenu = document.querySelector(".mobile-menu");
const nav = document.querySelector(".nav ul");
mobileMenu.addEventListener("click", function() {
  nav.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav ul li a");
navLinks.forEach(link => {
  link.addEventListener("click", function() {
    nav.classList.remove("active");
    mobileMenu.classList.remove("active");
  });
});

