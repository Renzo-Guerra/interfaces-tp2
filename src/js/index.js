console.log('carga js');

const carouselContainer = document.querySelector(".carousel-container");
const slides = document.querySelectorAll(".carousel-slide");
const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");
let currentIndex = 0;

function updateCarousel() {
	const offset = -currentIndex * 100;
	carouselContainer.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener("click", () => {
    console.log('anterior');
	if (currentIndex > 0) {
		currentIndex--;
		updateCarousel();
	}
});

nextButton.addEventListener("click", () => {
    console.log("siguiente");
	if (currentIndex < slides.length - 1) {
		currentIndex++;
		updateCarousel();
	}
});

updateCarousel();
