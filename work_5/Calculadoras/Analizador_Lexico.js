class AnalisisLexico{


    constructor(contenido){
        this.CadenaTexto=contenido+"#"
        this.Lexema=""
        this.estado=0

        this.ListaParser = []
        this.ListaErroresLexicos=[]
    }

    analisis(){
        var auxcaracter=0;//este va ser un auxiliar para analizar el siguiente caracter
        this.estado=0;

        for(var i=0; i<this.CadenaTexto.length; i++){

            var charActual=this.CadenaTexto[i];
            
            if ( this.esNumero(charActual) ){
                this.aceptarToken(1,charActual)

            }else if( charActual==='^' ){
                this.aceptarToken(2,charActual)
            }
            else if( charActual==='*' ){
                this.aceptarToken(3,charActual)
            }
            else if( charActual==='/' ){
                this.aceptarToken(4,charActual)
            }
            else if( charActual==='+' ){
                this.aceptarToken(5,charActual)
            }
            else if( charActual==='-' ){
                this.aceptarToken(6,charActual)

            } else if( charActual==='(' ){
                this.aceptarToken(7,charActual)
            }
            else if( charActual===')' ){
                this.aceptarToken(8,charActual)

            }else if( charActual==='#' ){
                this.aceptarToken(9,charActual)

            }else{
                this.rechazarToken(-1,charActual)
            }

        }//fin del for
    
    }//fin de metodo analisis

    esNumero(val) {
        return /^[0-9]+([,.][0-9]+)?$/g.test(val);
    }

    aceptarToken(tipo,lexema){
        this.ListaParser.push( {Tipo:tipo,Lexema:lexema} )
        this.lexema=""
        this.estado=0
    }

    rechazarToken(tipo,lexema){
        this.ListaErroresLexicos.push( {Tipo:tipo,Lexema:lexema} )
        this.lexema=""
        this.estado=0
    }

    returnListaTokens(){
        return this.ListaParser;
    }

    returnListaErroresLexicos(){
        return this.ListaErroresLexicos;
    }
}

module.exports=AnalisisLexico
