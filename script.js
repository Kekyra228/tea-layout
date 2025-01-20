document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in");

  const handleScroll = () => {
    fadeElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight - 50) {
        el.classList.add("active");
      }
    });
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);
});

document.addEventListener("DOMContentLoaded", () => {
  const teaCards = document.querySelectorAll(".tea-card");

  const handleScroll = () => {
    teaCards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight - 50) {
        card.classList.add("animate");
      }
    });
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);
});

document.addEventListener("DOMContentLoaded", function () {
  const animatedTexts = document.querySelectorAll(
    ".animated-text, .animated-image"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateX(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  animatedTexts.forEach((text) => observer.observe(text));
});

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".slide-in-left, .slide-in-right");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  elements.forEach((element) => observer.observe(element));
});
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((element) => observer.observe(element));
});

document.addEventListener("DOMContentLoaded", function () {
  const rotateElements = document.querySelectorAll(".rotate-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  rotateElements.forEach((element) => observer.observe(element));
});

document.addEventListener("DOMContentLoaded", () => {
  const quoteContent = document.querySelector(".quote-content");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  if (quoteContent) {
    observer.observe(quoteContent);
  }
});
document.querySelectorAll(".not-full h2, .not-full p").forEach((el) => {
  el.style.opacity = "";
});
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".not-full h2, .not-full p");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    },
    {
      threshold: 0.4,
    }
  );

  elements.forEach((el) => observer.observe(el));
});

const burgerMenu = document.querySelector(".burger-menu");
const navLinks = document.querySelector(".nav-links.mobile");
const closeMenuBtn = document.querySelector(".close-menu");
const body = document.body;

let isMobileMenuOpen = false;

burgerMenu.addEventListener("click", () => {
  navLinks.classList.add("open");
  body.classList.add("lock-scroll");
  isMobileMenuOpen = true;
});

closeMenuBtn.addEventListener("click", () => {
  navLinks.classList.remove("open");
  body.classList.remove("lock-scroll");
  isMobileMenuOpen = false;
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 769) {
    navLinks.classList.remove("open");
    body.classList.remove("lock-scroll");
    isMobileMenuOpen = false;
  } else if (isMobileMenuOpen) {
    navLinks.classList.add("open");
    body.classList.add("lock-scroll");
  }
});

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

function handleScroll() {
  const photos = document.querySelectorAll(".about-photo");
  photos.forEach((photo) => {
    if (isElementInViewport(photo) && !photo.classList.contains("visible")) {
      photo.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);
