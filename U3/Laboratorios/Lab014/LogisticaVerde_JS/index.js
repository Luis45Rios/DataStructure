/**
 * Cola de prioridad para gestionar los nodos
 * según el menor consumo energético acumulado.
 */
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(valor, prioridad) {
        this.values.push({ valor, prioridad });
        this.values.sort((a, b) => a.prioridad - b.prioridad);
    }

    dequeue() {
        return this.values.shift();
    }

    isEmpty() {
        return this.values.length === 0;
    }
}

/**
 * Clase que representa una red logística
 * utilizando el algoritmo de Dijkstra.
 */
class LogisticaGrafo {

    constructor(numNodos) {

        if (numNodos <= 0) {
            throw new Error("El número de nodos debe ser mayor que cero.");
        }

        this.numNodos = numNodos;
        this.adyacencia = Array.from(
            { length: numNodos },
            () => []
        );
    }

    /**
     * Agrega una ruta entre dos centros de acopio.
     * @param {number} origen
     * @param {number} destino
     * @param {number} consumoEnergetico
     */
    agregarRuta(origen, destino, consumoEnergetico) {

        if (
            origen < 0 || origen >= this.numNodos ||
            destino < 0 || destino >= this.numNodos
        ) {
            throw new Error("Nodo fuera de rango.");
        }

        this.adyacencia[origen].push({
            nodo: destino,
            peso: consumoEnergetico
        });
    }

    /**
     * Calcula la ruta de menor consumo energético.
     * @param {number} origen
     * @param {number} destino
     * @returns {{consumoTotal:number,ruta:number[]}}
     */
    calcularRutaMinima(origen, destino) {

        const distancias = Array(this.numNodos).fill(Infinity);
        const predecesores = Array(this.numNodos).fill(null);

        const cola = new PriorityQueue();

        distancias[origen] = 0;
        cola.enqueue(origen, 0);

        while (!cola.isEmpty()) {

            const { valor: actual, prioridad } = cola.dequeue();

            if (actual === destino)
                break;

            if (prioridad > distancias[actual])
                continue;

            for (const vecino of this.adyacencia[actual]) {

                const nuevaDistancia =
                    distancias[actual] + vecino.peso;

                if (nuevaDistancia < distancias[vecino.nodo]) {

                    distancias[vecino.nodo] = nuevaDistancia;
                    predecesores[vecino.nodo] = actual;

                    cola.enqueue(vecino.nodo, nuevaDistancia);
                }
            }
        }

        return {
            consumoTotal: distancias[destino],
            ruta: this.reconstruirRuta(predecesores, destino)
        };
    }

    reconstruirRuta(predecesores, destino) {

        const ruta = [];
        let actual = destino;

        while (actual !== null) {
            ruta.unshift(actual);
            actual = predecesores[actual];
        }

        return ruta;
    }
}

// ------------------------------
// Simulación de la red logística
// ------------------------------

const redLogistica = new LogisticaGrafo(5);

redLogistica.agregarRuta(0, 1, 4);
redLogistica.agregarRuta(0, 2, 2);
redLogistica.agregarRuta(1, 3, 5);
redLogistica.agregarRuta(2, 1, 1);
redLogistica.agregarRuta(2, 4, 8);
redLogistica.agregarRuta(3, 4, 3);

const resultado = redLogistica.calcularRutaMinima(0, 4);

console.log("===== LOGÍSTICA VERDE =====");
console.log("Ruta optimizada para el camión eléctrico:");
console.log("Centros visitados:", resultado.ruta.join(" -> "));
console.log("Consumo total estimado:", resultado.consumoTotal, "kWh");