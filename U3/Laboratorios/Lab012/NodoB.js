class NodoB {
    constructor(t, hoja) {
        this.t = t; // Grado mínimo del árbol B
        this.hoja = hoja; // Indica si es hoja
        this.claves = []; // IDs de pacientes
        this.hijos = []; // Referencias a hijos
        this.n = 0; // Cantidad de claves actuales
    }

    // Búsqueda interna dentro del nodo
    // Se realiza en RAM
    buscar(k) {
        let inicio = 0;
        let fin = this.claves.length - 1;

        // Búsqueda binaria dentro del nodo
        while (inicio <= fin) {
            let medio = Math.floor((inicio + fin) / 2);

            if (this.claves[medio] === k) {
                return this;
            }

            if (k < this.claves[medio]) {
                fin = medio - 1;
            } else {
                inicio = medio + 1;
            }
        }

        // Posición donde debería encontrarse
        let posicion = inicio;

        // Si es hoja significa que no existe
        if (this.hoja) {
            return null;
        }
        // Descenso jerárquico
        // Simula ir a buscar otra página en disco
        return this.hijos[posicion].buscar(k);

    }

}

// Clase principal del Árbol B
class ArbolBPacientes {

    constructor(t) {

        this.raiz = null;
        this.t = t;

    }


    buscar(k) {

        if (this.raiz === null) {
            return null;
        }

        return this.raiz.buscar(k);

    }

}

module.exports = {
    NodoB,
    ArbolBPacientes
};