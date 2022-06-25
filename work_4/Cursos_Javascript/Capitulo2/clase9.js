var x=4, y="4"

console.log("x == y", x==y )
console.log("x === y", x===y )

var persona={
    nombre:"mario"
}

var mario={
    nombre:"mario"
}

var otraPersona={
    nombre:"mario"
}

console.log("mario == otraPersona", mario==otraPersona )
console.log("mario === otraPersona", mario===otraPersona )


var otraPersona=mario//el objeto mario apunta a la misma direccion de memoria que el objeto otraPersona
console.log("mario == otraPersona", mario==otraPersona )
console.log("mario === otraPersona", mario===otraPersona )
