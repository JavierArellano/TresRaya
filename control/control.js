class Juego{
/*tablero de juego*/
    constructor(){
        this.tablero = [0,0,0,0,0,0,0,0,0]; #tablero de 3x3 (9 casillas).
    }
}
class Jugador{
/*Clase jugador*/
    constructor(njuga, tex){
        this.njuga = njuga; #numero de jugador para establecer el orden.
        this.tex = tex; #simbolo que se va a marcar en el tablero.
    }
}
class Control{
/* clase encargada de manejar la partida y los eventos.*/
    constructor(){
        this.ju1 = new Jugador(1, 'X');
        this.ju2 = new Jugador(2, 'O');
        this.actual = this.ju1; #jugador que tiene el turno.
        this.tab = new Juego();
        this.ganador = 0; #variable para seleccionar un ganador.
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
        this.liGanad.forEach(function(trio, index){ #recorrer la lista de combinaciones ganadoras mirando en cada trio de combinaciones.
            if (trio.every(function(pos){return control.tab.tablero[pos] == 1;})){ #si en el tablero hay un 1 en cada posicion de uno de los trios gana el jug1.
                return control.ganador = 1;}else if (trio.every(function(pos){return control.tab.tablero[pos] == 2;})){
                return control.ganador = 2;} #igual que el anterior pero para jugador 2.
            });
        if (this.ganador == 1){
            alert('El jugador 1 es el ganador.');
        }else if (this.ganador == 2){
            alert('El jugador 2 es el ganador.');
        }
    }
    turno(){ #funcion para establecer el turno de juego.
        if (this.actual == this.ju1){
            return this.actual = this.ju2;
        }else{
            return this.actual = this.ju1;
        }
    }
    vacio(posi){ #comprobar si en el tablero la posicion elegida por el jugador que tiene el turno esta ya marcada.
        if (this.tab.tablero[posi] == 0){
            return true;
        }else {return false;}
    }
    selec(posi, cas){ # funcion inicial 
        if (this.vacio(posi)){ #comprueba si esta la casilla selec vacia.
            this.tab.tablero[posi] = this.actual.njuga; #coloca en el tablero un 1 o un 2 segun el jugador actual.
            this.escrib(cas); 
            this.turno();}; #cambia el turno
        this.compGanad(); #comprueba si hay ganador.
    }
    escrib(casilla){ #escribe en el tablero de juego de la vista el simbolo del jugador actual.
        document.getElementById(casilla).innerHTML= this.actual.tex;
    }
    
}
var control = new Control(); #instanciamiento de la clase controladora.