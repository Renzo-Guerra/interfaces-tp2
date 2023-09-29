let buscador = document.querySelector(".header-barra-busqueda");
let menuDesplegable = document.querySelector("#desplegable-categorias");
let btnLupa = document.querySelector("#header-lupa-button");
let btnHamburguesa = document.querySelector("#header-hamburguesa-button");

btnHamburguesa.addEventListener("click", function () {
    menuDesplegable.classList.toggle("hidden");
});

btnLupa.addEventListener("click", function () {
	buscador.classList.toggle("hidden");
	buscador.style.position = "absolute";
	buscador.style.zIndex = 1;
});
