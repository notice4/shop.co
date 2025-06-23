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
