// Condicionales

//var numero = prompt("Escribe un numero");

//residuo = numero % 2;

//if (residuo == 0) {

//	console.log("par")

//} else {

//	console.log("impar");
//}

// Operadores Logicos

//mayor o menor
//> < 
//igual
//==
//diferente
//!=

//|| - Or

//&& - And 

//! - Negacion

//var edad = prompt ("Cual es tu edad");

//if (edad < 18 || edad > 10) {
//	console.log ("Es clasificacion B15");
//}

//if (edad == 15 || edad == 16 || edad == 10) {
//	console.log ("Es clasificacion B15");
//}

//var producto1 = prompt("Ingresa producto 1");

//var producto2 = prompt("Ingresa producto 2");

//if (producto1 && producto2) {
 //console.log ("Descuento especial");
//}else{
//	console.log("Precio normal")
//}

//var boleto = true;

//var edad = 18;

//if (boleto) {
//	console.log("Puedes entrar al cine")
//	if(edad >= 18) {
//		console.log("Puedes entrar a la pelicula clasificación C")
//	}else{
//		console.log("Vete a veer tus caricaturas XD")
//	}
//}else{
//	console.log("Debes comprar un boleto antes")
//}

//null - la variable no existe

//undefined - la variable no definida

//NaN - Not a number
//==
//False

var edad = prompt ("¿Cuál es tu edad?");
var ifeine 
var foreign

if (edad >= 18) {

	ifeine = prompt("Tienes IFE/INE")

	if (ifeine == "si") {

		foreign = prompt("Vives en el extanjero?");

		if (foreign == "si") {

			alert("Acude a la embajada a pedir ayuda");

		}else{

			alert("Puedes votar");
		}

	}else{

		alert("Corre renueva tu IFE/INE");

	}

}else{

	alert("Saquese :P"); 
}
