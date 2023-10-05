
let btnLogin = document.querySelector("#btn-loginForm");
let chk_captcha = document.querySelector("#chk-captcha");
let animacion = document.querySelector(".animacion");



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