
//import AnalisisLexico from "./Analizador_Lexico"
const Lexico = require("./Analizador_Lexico")
const Sintactico = require("./Analizador_Sintactico")

//"4-7+8+9/2*3" 
//"5+2-3+4*5/1+3^3"
var entrada= "5+2-3+4*5/1+3^3"

if ( entrada.length > 20 ){
    console.log("La longitud de la entrada sobrepaso los 20 caracteres")
}else{

var analilisLexico = new Lexico(entrada);
//var analilisLexico = new Lexico("5+2*(2+1)+4");
//var analilisLexico = new Lexico("5+30*(5-2)*6/3");
//var analilisLexico = new Lexico("(5.1)+8*3-(25).5+126");

analilisLexico.analisis()


var listaErrorLexico=analilisLexico.returnListaErroresLexicos();
var listaTokens=analilisLexico.returnListaTokens();
console.log(`Tokens: ${listaTokens.length} Errores: ${listaErrorLexico.length}`)

if( listaErrorLexico.length <= 0 ){

    //console.log("----------> Iniciando con el analisis lexico");
    //analilisLexico.analisis()

    for( var i=0; i<listaTokens.length ; i++ ){
        //console.log(">>> ",listaTokens[i].Lexema );

        switch( listaTokens[i].Tipo ){
            case 2:
                var res=parseInt(listaTokens[i-1].Lexema) ** parseInt(listaTokens[i+1].Lexema)
                listaTokens[i+1]={Tipo:0,Lexema:res}
                console.log( res )
                break;
            case 3:
                var res=parseInt(listaTokens[i-1].Lexema) * parseInt(listaTokens[i+1].Lexema)
                listaTokens[i+1]={Tipo:0,Lexema:res}
                console.log( res )
                break;
            case 4:
                var res=parseInt(listaTokens[i-1].Lexema) / parseInt(listaTokens[i+1].Lexema)
                listaTokens[i+1]={Tipo:0,Lexema:res}
                console.log( res )
                break;
            case 5:
                var res=parseInt(listaTokens[i-1].Lexema) + parseInt(listaTokens[i+1].Lexema)
                listaTokens[i+1]={Tipo:0,Lexema:res}
                console.log( res )
                break;
            case 6:
                var res=parseInt(listaTokens[i-1].Lexema) - parseInt(listaTokens[i+1].Lexema)
                listaTokens[i+1]={Tipo:0,Lexema:res}
                console.log( res )
                break;

        }
    }

    //console.log("----------> Fin del analisis lexico");

    console.log("******************** ANALISIS SINTACTICO *************************")
    var analisisSintactico = new Sintactico( analilisLexico.returnListaTokens() );
    //analisisSintactico.parser()
    console.log("*: "+analisisSintactico.presedenciaDeOperadores("*") )
    console.log("^: "+analisisSintactico.presedenciaDeOperadores("^") )
    console.log("-: "+analisisSintactico.presedenciaDeOperadores("-") )
    console.log("/: "+analisisSintactico.presedenciaDeOperadores("/") )

    


}else{
    console.log("La cadena de entrada contiene caracteres no aceptados.")
    for( var i=0; i<listaErrorLexico.length ; i++ ){
        console.log( listaErrorLexico[i] );
    }
}


}