/*
2) Tres en Raya. El juego del tres en raya consiste en un tablero de 3x3, en el que
sucesivamente dos jugadores van marcando casillas hasta conseguir tener sus tres
marcas en l nea, pudiendo ser sta horizontal, vertical o en diagonal. Se pide por tanto í é
la implementaci n de ste juego teniendo en cuenta: ó é
1. El juego es pensado para ser usado por dos usuarios.
2. El juego finaliza cuando los dos seleccionan sus 3 marcas, o bien uno consigue
antes las tres en l nea
*/
class Juego{
    constructor(){
        this.tablero = [0,0,0,0,0,0,0,0,0];
    }
}
var j = new Juego();

class Jugador{
    constructor(njuga){
        this.njuga = njuga;
    }
    posicionCero(posi){
        if (j.tablero[posi] === 0){
            return true;
        }else {return false;}
    }
    marca(posi){
        if (this.posicionCero(posi)){
            j.tablero[posi] = this.njuga;
        }
    }
    
}
var jugador1 = new Jugador(1);
var jugador2 = new Jugador(2);
jugador1.marca(4);
jugador2.marca(4);