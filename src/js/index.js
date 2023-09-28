document.addEventListener("DOMContentLoaded", function () {
	const slides = document.querySelectorAll(".carousel-slide");

	let currentIndex = 0;

	function showSlide(index) {
		slides.forEach((slide, i) => {
			slide.style.transform = `translateX(${100 * (i - index)}%)`;
		});
	}

	function nextSlide() {
		currentIndex = (currentIndex + 1) % slides.length;
		showSlide(currentIndex);
	}

	// Configura un temporizador para avanzar automáticamente cada 3 segundos (3000 ms)
	setInterval(nextSlide, 3000);

	// Muestra el primer slide
	showSlide(currentIndex);
});
