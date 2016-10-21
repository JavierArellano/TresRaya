class Juego{
/*tablero de juego*/
    constructor(){
        this.tablero = [0,0,0,0,0,0,0,0,0];
    }
}
class Jugador{
/*Clase jugador*/
    constructor(njuga, tex){
        this.njuga = njuga;
        this.tex = tex;
    }
}
class Control{
/* clase encargada de manejar la partida y los eventos.*/
    constructor(){
        this.ju1 = new Jugador(1, 'X');
        this.ju2 = new Jugador(2, 'O');
        this.actual = this.ju1;
        this.tab = new Juego();
        this.ganador = 0;
        this.liGanad = [[0,1,2],
                        [3,4,5],
                        [6,7,8],
                        [0,3,6],
                        [1,4,7],
                        [2,5,8],
                        [0,4,8],
                        [2,4,6]];
    }
    compGanad(){
        this.liGanad.forEach(function(trio, index){
            if (trio.every(function(pos){return control.tab.tablero[pos] == 1;})){
                return control.ganador = 1;}else if (trio.every(function(pos){return control.tab.tablero[pos] == 2;})){
                return control.ganador = 2;}
            });
        if (this.ganador == 1){
            alert('El jugador 1 es el ganador.');
        }else if (this.ganador == 2){
            alert('El jugador 2 es el ganador.');
        }
    }
    turno(){
        if (this.actual == this.ju1){
            return this.actual = this.ju2;
        }else{
            return this.actual = this.ju1;
        }
    }
    vacio(posi){
        if (this.tab.tablero[posi] == 0){
            return true;
        }else {return false;}
    }
    selec(posi, cas){
        if (this.vacio(posi)){
            this.tab.tablero[posi] = this.actual.njuga;
            this.escrib(cas); 
            this.turno();}; 
        this.compGanad();
    }
    escrib(casilla){ 
        document.getElementById(casilla).innerHTML= this.actual.tex;
    }
    
}
var control = new Control(); 