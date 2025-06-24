const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

for (let i = 0; i < 3; i++) {
  const span = document.createElement('span');
  burger.appendChild(span);
}

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const navigation = document.querySelector('.navigation');

    if (burger && navigation) {
        burger.addEventListener('click', function() {
            navigation.classList.toggle('active');
            burger.classList.toggle('open');
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.fade-in-on-scroll');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});