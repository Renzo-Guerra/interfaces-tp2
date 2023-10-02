
const cards = document.querySelectorAll('.card');

let currentIndex = 0;

function nextCard() {
  currentIndex = (currentIndex + 1) % cards.length;
  updateCarrusel();
}

function prevCard() {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateCarrusel();
}

function updateCarrusel() {
  const translateX = -currentIndex ; //
  carrusel.style.transform = `translateX(${translateX}px)`;
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.derecha').addEventListener('click', nextCard);
  document.querySelector('.izquierda').addEventListener('click', prevCard);
});
