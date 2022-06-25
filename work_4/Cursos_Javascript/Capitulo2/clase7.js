var persona1={
    nombre:"mario",
    apellido:"tun",
    edad:25,
}

var persona2={
    nombre:"nicolas",
    apellido:"perez",
    edad:24,
}

function imprimirNombreMayusculas(personas){
    //declara la variable nombre que va a salir del objeto personas
    var { nombre }= personas//var nombre=personas.nombre
    console.log( nombre.toUpperCase() )
}

imprimirNombreMayusculas( persona1 )
imprimirNombreMayusculas( persona2 )


//---------------> RETO CLASE 7 <---------------
//Crear una funcion que imprima un mensaje con nombre y edad de una persona

function imprimirNombreYEdad(personas){//Hola, me llamo Mario y tengo 25 años.

    var { nombre,edad }=personas
    console.log( `Hola, me llamo ${nombre} y tengo ${edad} años.`)   
}

imprimirNombreYEdad(persona1)
imprimirNombreYEdad(persona2)