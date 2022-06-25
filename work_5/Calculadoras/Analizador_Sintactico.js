class AnalisisSintactico{

    constructor(listaDeTokens){
        //this.simboloPreanalisis=listaDeTokens
        
        this.numeroPre
        this.simboloPreanalisis=listaDeTokens
        //console.log(this.simboloPreanalisis[this.simboloPreanalisis.length-1].Tipo)
        this.listaErroresSintacticos=[]
        this.analisisCorrecto
    }

    returnListaErroresSintacticos(){
        return this.listaErroresSintacticos;
    }

    parser(){//L->E#
        this.numeroPre=0;
        this.analisisCorrecto=true;

        this.L();
    }

    L(){
        console.log("en L")
        this.E();
        if( this.simboloPreanalisis[this.numeroPre] == 9){
            this.match(9)
        }
    }

    E(){
        console.log("en E")
        this.T();
        this.E2();
        return
    }

    E2(){
        console.log("en E2: ",this.simboloPreanalisis[this.numeroPre] )
        //console.log("E(): ",this.simboloPreanalisis[this.numeroPre])
        if( this.simboloPreanalisis[this.numeroPre] == 5){//+
            //return this.E()+this.T()
            this.match(5)
            this.T(); this.E2();
            return

        }if( this.simboloPreanalisis[this.numeroPre] == 6){//-
            this.match(6)
            this.T(); this.E2();
            return
        }else{

            return
        }

    }

    T(){
        console.log("en T")
        this.F();
        this.T2();
        return
    }

    T2(){
        console.log("en T2")
        if( this.simboloPreanalisis[this.numeroPre] == 3){// *
            this.match(3)
            this.F(); this.T2();
            return

        }if( this.simboloPreanalisis[this.numeroPre] == 4){// /
            this.match(4)
            this.F(); this.T2();
            return

        }else{
            return
        }


    }
    
    F(){
        console.log("en F")
        if( this.simboloPreanalisis[this.numeroPre] == 7){// (
            this.match(7)
            this.E();
            //this.F();
            return

        }if( this.simboloPreanalisis[this.numeroPre] == 8){// )
            this.match(8)
            return

        }else{
            console.log("-->numero: ",this.simboloPreanalisis[this.numeroPre] )
            this.match(1)
            return this.simboloPreanalisis[this.numeroPre] //numero
        }

    }

    /*F3(){
      if( this.simboloPreanalisis.Tipo == 1){
        this.match(1)
        return Number(this.simboloPreanalisis.Lexema)

      }else if( this.simboloPreanalisis.Tipo == 7){
        this.match(7)
      }else if( this.simboloPreanalisis.Tipo == 8){
        this.match(8)
      }else{

      }  
      
      
    }*/

    match(token_a_verificar){
        //console.log(">>>>>> MATCH: ",this.simboloPreanalisis[2] )
        if( token_a_verificar == this.simboloPreanalisis[this.numeroPre].Tipo && 
            this.simboloPreanalisis.Tipo != this.simboloPreanalisis[this.simboloPreanalisis.length-1].Tipo ){
            var indice=this.numeroPre+1
            console.log("indice: ",indice)
            this.simboloPreanalisis=this.simboloPreanalisis[indice]
            console.log("sigue con otro caracter")
            

        }else if( token_a_verificar == this.simboloPreanalisis[this.simboloPreanalisis.length-1].Tipo){
            console.log("¡¡¡ Se finalizo el analisis sintactico !!!")

        }else{
            console.log("--->[ EN MATCH ]Analisis Sintactico Incorrecto Se esperaba : " + token_a_verificar);
            this.listaErroresSintacticos.push( {Tipo:-1,Valor:token_a_verificar} )
            this.analisisCorrecto=false;
        }
    }

    presedenciaDeOperadores( operador ){

        switch( operador ){
            case "^":
                return 5
            break;

            case "*":
                return 4
            break;

            case "/":
                return 4
            break;

            case "+":
                return 3
            break;

            case "-":
                return 3
            break;
        }
    }

}

module.exports=AnalisisSintactico