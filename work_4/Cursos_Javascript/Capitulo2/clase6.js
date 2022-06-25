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

/*function imprimirNombreMayusculas(personas){
    var nombre=personas.nombre.toUpperCase()
    console.log( nombre )
}*/
function imprimirNombreMayusculas( {nombre} ){
    console.log( nombre.toUpperCase() )
}

imprimirNombreMayusculas( persona1 )
imprimirNombreMayusculas( persona2 )
imprimirNombreMayusculas( { nombre:"pepito"} )
imprimirNombreMayusculas()//error
imprimirNombreMayusculas({sueldo:3000})//error