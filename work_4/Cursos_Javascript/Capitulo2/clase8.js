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

function cumpleaños(personas){
    personas.edad+=1
    return personas
}

function cumpleaños_nuevo(personas){

    return {//retorna un nuevo objeto diferente al parametro
        ... personas,//copia todo el objeto personas
        edad:personas.edad+=1
    }
}
