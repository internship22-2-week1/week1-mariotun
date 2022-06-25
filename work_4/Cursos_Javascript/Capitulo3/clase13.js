var mario={
    nombre:"mario",
    apellido:"tun",
    edad:25,
    peso:75
}

console.log(`Al inicio del año ${mario.nombre} pesa ${mario.peso}kg`)

const INCREMENTO_PESO=200
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -=INCREMENTO_PESO

for( var i=1; i<=365; i++ ){
    var random=Math.random()

    if( random < 0.25 ){
        //aumenta de peso
        aumentarDePeso(mario)

    }else if( random < 0.5 ){
        //adelgazar
        adelgazar(mario)
    }
}

console.log(`Al final del año ${mario.nombre} pesa ${mario.peso}kg`)


