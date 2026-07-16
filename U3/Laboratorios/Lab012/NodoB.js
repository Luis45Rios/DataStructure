class NodoB {

    static lecturasDisco = 0;


    constructor(t, hoja){

        this.t = t;
        this.hoja = hoja;

        this.claves = [];
        this.hijos = [];

        this.n = 0;
    }



    buscar(k){


        let inicio = 0;
        let fin = this.claves.length - 1;



        // Búsqueda binaria dentro de RAM
        while(inicio <= fin){

            let medio = Math.floor((inicio+fin)/2);


            if(this.claves[medio] === k){
                return this;
            }


            if(k < this.claves[medio]){
                fin = medio-1;
            }
            else{
                inicio = medio+1;
            }

        }



        // Si no tiene hijos termina
        if(this.hoja){
            return null;
        }



        // Simula lectura de disco
        NodoB.lecturasDisco++;



        return this.hijos[inicio].buscar(k);

    }

}



class ArbolBPacientes{


    constructor(t){

        this.raiz=null;
        this.t=t;

    }



    buscar(k){

        NodoB.lecturasDisco=0;


        if(this.raiz){
            return this.raiz.buscar(k);
        }


        return null;

    }

}



module.exports={
    NodoB,
    ArbolBPacientes
};