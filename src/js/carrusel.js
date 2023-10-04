
let btn_izq_recomendado = document.querySelector("#btn-izq-recomendados");
let btn_der_recomendado = document.querySelector("#btn-der-recomendados");



// Selecciona todos los elementos de tarjeta y los almacena en la variable "cards".
const cards = document.querySelectorAll('.card');

// Declara una variable currentIndex para rastrear el índice de la tarjeta actual en el carrusel.
let currentIndex = 0;

// Función para avanzar a la siguiente tarjeta en el carrusel.
function nextCard() {
  currentIndex = (currentIndex + 1) % cards.length;
  updateCarousel();
}

// Función para retroceder a la tarjeta anterior en el carrusel.
function prevCard() {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateCarousel();
}

// Función para actualizar la posición del carrusel en la pantalla.
function updateCarousel() {
  const carrusel = document.querySelector('.carrusel__cards'); // Selecciona el contenedor del carrusel.
  const cardWidth = cards[0].offsetWidth; // Obtiene el ancho de una tarjeta (suponemos que todas las tarjetas tienen el mismo ancho).
  const translateX = -currentIndex * cardWidth; // Calcula la posición horizontal del carrusel en píxeles.
  carrusel.style.transform = `translateX(${translateX}px)`; // Aplica la transformación para mover el carrusel.
}

document.addEventListener('DOMContentLoaded', () => {
  // Agrega eventos de clic a los botones de "izquierda" y "derecha".
  document.querySelector('.izquierda').addEventListener('click', prevCard);
  document.querySelector('.derecha').addEventListener('click', nextCard);
});
