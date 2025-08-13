function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

const counters = document.querySelectorAll(".counter");
let started = false;

function runCounters() {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / 200;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 15);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
}

function handleScroll() {
  const sectionTop = document.querySelector(".stats").getBoundingClientRect().top;
  if (sectionTop < window.innerHeight && !started) {
    runCounters();
    started = true;
  }
}

window.addEventListener("scroll", handleScroll);