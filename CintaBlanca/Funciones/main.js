//function saludo(){
//	console.log("hola");
//}

//saludo()

//function suma(){
//	var a = 10;
//	var b = 30;
//	var res = a+b;
//	console.log(res)
//}

//suma()

//function suma(a, b){
	
//	console.log(a+b)
//}

//suma(20, 50)

//var usuario = prompt("Quieres jugar piedra papel o tijera");

//if (usuario == "si"){
//	jugar();
//}

//function jugar(){

//}
//var boton = document.getElementById("boton");
//var mensaje = document.getElementById('mensaje')

//reaccion a eventos
//boton.addEventListener("click", saludo)

//function saludo(){

//	mensaje.innerHTML = "Hola";
	
//}

var juego = document.getElementById("juego");
var mensaje = document.getElementById("mensaje");

juego.addEventListener("click", jugar);

function jugar(){

	var piedra = "piedra";
	var papel = "papel";
	var tijera = "tijera";
	var user = prompt("¿Piedra, papel o tijera?");
	var machine = papel

	if (user==piedra && machine==papel){
	mensaje.innerHTML = "Jugador: Piedra Adversario:Papel = Looser :("
	
	}


	if (user==papel && machine==papel) {
	mensaje.innerHTML = "Jugador:Papel Adversario:Papel = Tie :| "
	
	}	


	if (user==tijera && machine==papel) {
	mensaje.innerHTML = "Jugador:Tijera Adversario:Papel  = Ganaste :) "
	
	}


}