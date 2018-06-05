//Un script que reciba una palabra de 4 letras y devuelva la palanra en mayusculas y minusculas, ejemplo:

//unput: hola

//output: Hola

//var palabra = prompt ("Escribe una palabra d 4 letras");

//var palabra2 = []

//palabra2[0] = palabra[0].toUpperCase()
//palabra2[1] = palabra[1].toLowerCase()
//palabra2[2] = palabra[2].toUpperCase()
//palabra2[3] = palabra[3].toLowerCase()

//console.log(palabra2)

//palabra3 = palabra[0].toUpperCase() + palabra[1].toLowerCase() + palabra[2].toUpperCase() + palabra[3].toLowerCase()

//console.log(palabra3)

//var i = 0;

//for(donde inicia; condicion de cierre; cada cuando se realiza (i ++ "incrimento unitario"))
//for(i = 0; i <= 9; i ++ ) {console.log"i"

//

//var palabra = prompt ("Ingresa tu banda favorita")

//for(i = 0; i < palabra.length; i ++ ) {console.log (palabra [i])

//}

//for(i = 0; i<=100; i ++ ) { 

//	var residuo = i % 2;

//	if (residuo == 0) {

//		console.log (i, "par")

//	} else {console.log (i, "impar");
	
//	}
//}


var palabra = prompt("Escribe una frase");

for (var i = 0; i < palabra.length; i++) {

	if (i % 2 == 0) {console.log(palabra[i].toUpperCase());
	}
	
	else {console.log(palabra[i].toLowerCase());

	}
	
}







