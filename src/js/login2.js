let form_login = document.querySelector("#form-login");
let btnLogin = document.querySelector("#btn-loginForm");
let chk_captcha = document.querySelector("#chk-captcha");
let animacion = document.querySelector(".animacion");
let container_form_login = document.querySelector("#container-form-login");
let registracion_success_login = document.querySelector("#registration-success-login");
let registration_error_login = document.querySelector("#registration-error-login");

function login(event) {
	event.preventDefault();
	const user = "juegosmania";
	const pass = "123456";
	let formData = new FormData(form_login);

	let usuario = formData.get('usuario');
	let contrasenia = formData.get('contrasenia');

	if(usuario == user && contrasenia == pass) {
		registracion_success_login.classList.toggle("hidden");
		container_form_login.classList.toggle("hidden");

		setTimeout(function () {
			window.location.href = "index.html";
		}, 3000);

	} else {
		registration_error_login.classList.toggle("hidden");
		container_form_login.classList.toggle("hidden");
	}
	
}

chk_captcha.addEventListener("click", function () {
	if (chk_captcha.checked) {
		btnLogin.removeAttribute("disabled");
	} else {
		btnLogin.setAttribute("disabled", "");
	}
});

btnLogin.addEventListener("click", function () {
    localStorage.setItem('login', 'true');
});