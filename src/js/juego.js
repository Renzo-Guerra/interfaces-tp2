let popup = document.querySelector("#popup");
let imagenEnPopup = document.getElementById("imagenEnPopup");
let cerrarPopup = document.getElementById("cerrarPopup");

function abrir(pos) {
    let imagenPopup = document.querySelector("#img"+ pos);
    popup.style.display = "flex";
	imagenEnPopup.src = imagenPopup.src;
}

cerrarPopup.addEventListener("click", () => {
	popup.style.display = "none";
});