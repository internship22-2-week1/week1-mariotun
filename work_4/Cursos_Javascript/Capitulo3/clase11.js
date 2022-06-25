var mario={
    nombre:"mario",
    apellido:"tun",
    edad:25,
    ingeniero:true,
    cocinero:false,
    cantante:false,
    futbol:true
}

var juan={
    nombre:"Juan",
    apellido:"Gomez",
    edad:13
}

const MAYORIA_DE_EDAD=18

function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona){

    if( esMayorDeEdad(persona) ){
        console.log( `${persona.nombre} es mayor de edad.` )
    }else{
        console.log( `${persona.nombre} no es mayor de edad.` )
    }
}