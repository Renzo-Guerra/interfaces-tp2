let isLogin = localStorage.getItem('login');
console.log(isLogin);

let buscador = document.querySelector(".header-barra-busqueda");
let menuDesplegable = document.querySelector("#desplegable-categorias");
let menuUser = document.querySelector("#header-menu-user");
let btnLupa = document.querySelector("#header-lupa-button");
let btnHamburguesa = document.querySelector("#header-hamburguesa-button");
let btnUser = document.querySelector("#header-user-button");
let btnLogin = document.querySelector("#btn-login");
let avatarUser = document.querySelector("#avatar-user");
let menuSinLogear = document.querySelector("#sin-logear");
let menuLogeado = document.querySelector("#logeado");
let btnCerrarSesionUser = document.querySelector("#cerrarSesionUser"); 

if(isLogin != null) {
    avatarUser.src = "/src/assets/img/header/avatar1.svg";
    menuSinLogear.classList.toggle('hidden');
    menuLogeado.classList.toggle("hidden");
}

btnCerrarSesionUser.addEventListener('click', function () {
    localStorage.removeItem('login');
    avatarUser.src = "/src/assets/img/header/perfil.svg";
    menuSinLogear.classList.toggle("hidden");
	menuLogeado.classList.toggle("hidden");
});

btnUser.addEventListener("click", function () {
	if (!menuDesplegable.classList.contains("hidden")) {
		menuDesplegable.classList.toggle("hidden");
	}
	menuUser.classList.toggle("hidden");
});

btnHamburguesa.addEventListener("click", function () {
	if (!menuUser.classList.contains("hidden")) {
		menuUser.classList.toggle("hidden");
	}
	menuDesplegable.classList.toggle("hidden");
});

btnLupa.addEventListener("click", function () {
	buscador.classList.toggle("hidden");
	buscador.style.position = "absolute";
	buscador.style.zIndex = 1;
});