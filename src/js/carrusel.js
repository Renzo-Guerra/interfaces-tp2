
// let contIzqRecomendados = 0;
// let contIzqAccion = 0;
// let contIzqTerror = 0;
// let contIzqVestir = 0;
// let contDerRecomendados = 0;
// let contDerAccion = 0;
// let contDerTerror = 0;
// let contDerVestir = 0;

// // Función para mover el carrusel a la izquierda
// function moverIzquierda(carruselId, idBoton, idBotonContrario) {
//   let boton = document.getElementById(idBoton);
//   let botonContrario = document.getElementById(idBotonContrario);
//   let carrusel = document.getElementById(carruselId);
//   let carruselCards = carrusel.querySelector(".carrusel__cards");
//   let totalCardsSeccion = carruselCards.querySelectorAll(".card");
//   let cardWidth = carruselCards.querySelector(".card").offsetWidth;
//   let totalClicksIzq = parseInt(((totalCardsSeccion.length * cardWidth) / 1100).toFixed()) + 1;

//   if (carruselId == "recomendados") {
// 		contIzqRecomendados++;
// 		if (contIzqRecomendados == totalClicksIzq) {
//       //deshabilito el boton
//       // botonIzq.disabled = "disabled";
//       // botonDer.disabled = false;
// 		}
//   }
//   if (carruselId == "accion") {
// 		contIzqAccion++;
// 		if (contIzqAccion == totalClicksIzq) {
// 			//deshabilito el boton
// 		}
//   }
//   if (carruselId == "terror") {
// 		contIzqTerror++;
// 		if (contIzqTerror == totalClicksIzq) {
// 			//deshabilito el boton
// 		}
//   }
//   if (carruselId == "vestir") {
// 		contIzqVestir++;
// 		if (contIzqVestir == totalClicksIzq) {
// 			//deshabilito el boton
// 		}
//   }

//   carruselCards.style.transform = "translateX(2%)";
// }

// // Función para mover el carrusel a la derecha
// function moverDerecha(carruselId, idBoton, idBotonContrario) {
	
//   let boton = document.getElementById(idBoton);
// 	let botonContrario = document.getElementById(idBotonContrario);
// 	let carrusel = document.getElementById(carruselId);
// 	let carruselCards = carrusel.querySelector(".carrusel__cards");
// 	let totalCardsSeccion = carruselCards.querySelectorAll(".card");
// 	let cardWidth = carruselCards.querySelector(".card").offsetWidth;
// 	let totalClicksDer = parseInt(((totalCardsSeccion.length * cardWidth) / 1100).toFixed()) + 1;

// 	if (carruselId == "recomendados") {
// 		contDerRecomendados++;
// 		if (contDerRecomendados == totalClicksDer) {
// 			//deshabilito el boton
// 			// botonIzq.disabled = "disabled";
// 			// botonDer.disabled = false;
// 		}
// 	}
// 	if (carruselId == "accion") {
// 		contDerAccion++;
// 		if (contDerAccion == totalClicksDer) {
// 			//deshabilito el boton
// 		}
// 	}
// 	if (carruselId == "terror") {
// 		contDerTerror++;
// 		if (contDerTerror == totalClicksDer) {
// 			//deshabilito el boton
// 		}
// 	}
// 	if (carruselId == "vestir") {
// 		contDerVestir++;
// 		if (contDerVestir == totalClicksDer) {
// 			//deshabilito el boton
// 		}
// 	}

// 	carruselCards.style.transform = "translateX(-15%)";

// }

// // Escuchar clics en las flechas izquierdas
// document.getElementById("btn_izq_recomnedados").addEventListener("click", function () {
//   moverIzquierda("recomendados", "btn_izq_recomnedados", "btn_der_recomnedados");
// });
// document.getElementById("btn_izq_accion").addEventListener("click", function () {
//   moverIzquierda("accion");
// });
// document.getElementById("btn_izq_terror").addEventListener("click", function () {
//   moverIzquierda("terror");
// });
// document.getElementById("btn_izq_vestir").addEventListener("click", function () {
//   moverIzquierda("vestir");
// });

// // Escuchar clics en las flechas derechas
// document.getElementById("btn_der_recomnedados").addEventListener("click", function () {
//   moverDerecha("recomendados", "btn_der_recomnedados", "btn_izq_recomnedados");
// });
// document.getElementById("btn_der_accion").addEventListener("click", function () {
//   moverDerecha("accion");
// });
// document.getElementById("btn_der_terror").addEventListener("click", function () {
//   moverDerecha("terror");
// });
// document.getElementById("btn_der_vestir").addEventListener("click", function () {
//   moverDerecha("vestir");
// });


let carruselContainer = document.querySelector(".carrusel__container");
let carruselCards = document.querySelector(".carrusel__cards");
let btnIzqRecomendados = document.querySelector("#btn_izq_recomnedados");
let btnDerRecomendados = document.querySelector("#btn_der_recomnedados");
let divRecomendados = document.querySelector("#recomendadosCard");
let divAccion = document.querySelector("#accionCard");
let divTerror = document.querySelector("#terrorCard");
let divVestir = document.querySelector("#vestirCard");
let btnIzqAccion = document.querySelector("#btn_izq_accion");
let btnDerAccion = document.querySelector("#btn_der_accion");
let btnIzqTerror = document.querySelector("#btn_izq_terror");
let btnDerTerror = document.querySelector("#btn_der_terror");
let btnIzqVestir = document.querySelector("#btn_izq_vestir");
let btnDerVestir = document.querySelector("#btn_der_vestir");

let posActRecomendados = 0;
let posActAccion = 0;
let posActTerror = 0;
let posActVestir = 0;

// carrusel recomendados
btnDerRecomendados.addEventListener("click", () => {
	let maxPosition = divRecomendados.children.length - 3;
	if (posActRecomendados < maxPosition) {
		posActRecomendados++;
		actualizarTransform(divRecomendados, posActRecomendados);
	}
});

btnIzqRecomendados.addEventListener("click", () => {
	if (posActRecomendados > 0) {
		posActRecomendados--;
		actualizarTransform(divRecomendados, posActRecomendados);
	}
});

// carrusel accion
btnDerAccion.addEventListener("click", () => {
	let maxPosition = divAccion.children.length - 3;
	if (posActAccion < maxPosition) {
		posActAccion++;
		actualizarTransform(divAccion, posActAccion);
	}
});

btnIzqAccion.addEventListener("click", () => {
	if (posActAccion > 0) {
		posActAccion--;
		actualizarTransform(divAccion, posActAccion);
	}
});

// carrusel terror
btnDerTerror.addEventListener("click", () => {
	let maxPosition = divTerror.children.length - 3;
	if (posActTerror < maxPosition) {
		posActTerror++;
		actualizarTransform(divTerror, posActTerror);
	}
});

btnIzqTerror.addEventListener("click", () => {
	if (posActTerror > 0) {
		posActTerror--;
		actualizarTransform(divTerror, posActTerror);
	}
});


// carrusel vestir
btnDerVestir.addEventListener("click", () => {
	let maxPosition = divVestir.children.length - 3;
	if (posActVestir < maxPosition) {
		posActVestir++;
		actualizarTransform(divVestir, posActVestir);
	}
});

btnIzqVestir.addEventListener("click", () => {
	if (posActVestir > 0) {
		posActVestir--;
		actualizarTransform(divVestir, posActVestir);
	}
});

// funcion general
function actualizarTransform(div, pos) {
	let cardWidth = div.children[0].offsetWidth;
	let translateX = -pos * cardWidth;
	div.style.transform = `translateX(${translateX}px)`;
}
