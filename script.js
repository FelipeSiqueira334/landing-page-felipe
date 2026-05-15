const nodes = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

nodes.forEach((node, index) => {
  node.style.transitionDelay = `${index * 70}ms`;
  observer.observe(node);
});
