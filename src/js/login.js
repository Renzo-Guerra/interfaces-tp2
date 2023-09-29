let btnLogin = document.querySelector("#btn-loginForm");

btnLogin.addEventListener("click", function () {
    localStorage.setItem('login', 'true');
});