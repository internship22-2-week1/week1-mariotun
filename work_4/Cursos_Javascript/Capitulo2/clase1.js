//====================================VIDEO 1================================================
var nombre="mario", apellido="tun";
var edad=28

console.log("Hola "+nombre+" "+apellido)
console.log("Tengo "+edad+" años")

var peso=75

//====================================Variables Strings================================================

var nombreEnMayusculas=nombre.toUpperCase()

var apellidoEnMinusculas=apellido.toLocaleLowerCase()

var primeraLetraDelNombre=nombre.charAt(0)

var cantidadDeLetrasDelNombre=nombre.length

//interpolacion de texto
var nombreCompleto=`${nombre} ${apellido.toUpperCase()}`

var str=nombre.substring(1,3)//ar

//---------------> RETO CLASE 2 <--------------- 
//Mostrar la ultima letra de un nombre

var usuario="Alejandro"
console.log(`Ultima letra de ${usuario} es: ${usuario.substring(usuario.length-1,usuario.length) }`)

