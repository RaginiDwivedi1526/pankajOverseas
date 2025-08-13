document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.program-card').forEach(el => observer.observe(el));

  const counters = document.querySelectorAll('.count');
  const counterObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = +el.dataset.target;
        let count = 0;
        const step = target / 200;

        function updateCounter() {
          count += step;
          if (count < target) {
            el.textContent = Math.floor(count);
            requestAnimationFrame(updateCounter);
          } else {
            el.textContent = target;
          }
        }
        updateCounter();
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(el => counterObserver.observe(el));
});
