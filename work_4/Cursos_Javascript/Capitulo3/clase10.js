var mario={
    nombre:"mario",
    apellido:"tun",
    edad:25,
    ingeniero:true,
    cocinero:false,
    cantante:false,
    futbol:true
}

function imprimirProfesiones(persona){
    console.log( `${persona.nombre} es:` )

    if( persona.ingeniero ){
        console.log("Ingeniero")
    }else{
        console.log("No es Ingeniero ")
    }

    if( persona.cocinero ){
        console.log("cocinero")
    }else{
        console.log("No es cocinero")
    }

    if( persona.futbol ){
        console.log("Jugador de futbol")
    }else{
        console.log("No juega futbol")
    }
    
}

imprimirProfesiones(mario)

//---------------> RETO CLASE10 <---------------
//Imprimir si una persona es mayor o menor de edad
function imprimirSiEsMayorDeEdad(persona){

    if( persona.edad >= 18 ){
        console.log( `${persona.nombre} es mayor de edad.` )
    }else{
        console.log( `${persona.nombre} no es mayor de edad.` )
    }
}