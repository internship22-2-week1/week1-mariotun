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

//const esMayorDeEdad = function(persona){//funcion flecha

/*const esMayorDeEdad = persona => {//aqui podemos quitar los parentesis porque solo hay 1 valor como parametro
    return persona.edad >= MAYORIA_DE_EDAD
}*/

/*const esMayorDeEdad = (persona) => {//otra forma de crear una funcion flecha
    return persona.edad >= MAYORIA_DE_EDAD
}*/

//const esMayorDeEdad = (persona) => persona.edad >= MAYORIA_DE_EDAD

const esMayorDeEdad = ( {edad} ) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona){

    if( esMayorDeEdad(persona) ){
        console.log( `${persona.nombre} es mayor de edad.` )
    }else{
        console.log( `${persona.nombre} no es mayor de edad.` )
    }
}

function permitirAcceso(persona){
    if( !esMayorDeEdad(persona) ){
        console.log("Acceso denegado")
    }
}