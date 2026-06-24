class NodoArbol {
    constructor(valor) {
        this.valor = valor
        this.izquierdo = null
        this.derecho = null
    }
}

function recorridoInorden(raiz) {
    if (raiz === null) {
        return []
    }

    return [
        ...recorridoInorden(raiz.izquierdo),
        raiz.valor,
        ...recorridoInorden(raiz.derecho)
    ]
}

function recorridoPreorden(raiz) {
    if (raiz === null) {
        return []
    }

    return [
        raiz.valor,
        ...recorridoPreorden(raiz.izquierdo),
        ...recorridoPreorden(raiz.derecho)
    ]
}

function recorridoPostorden(raiz) {
    if (raiz === null) {
        return []
    }

    return [
        ...recorridoPostorden(raiz.izquierdo),
        ...recorridoPostorden(raiz.derecho),
        raiz.valor
    ]
}

// Construcción del árbol de prueba
const raiz = new NodoArbol(10)

raiz.izquierdo = new NodoArbol(5)
raiz.derecho = new NodoArbol(20)

raiz.izquierdo.izquierdo = new NodoArbol(3)
raiz.izquierdo.derecho = new NodoArbol(7)

raiz.derecho.izquierdo = new NodoArbol(15)
raiz.derecho.derecho = new NodoArbol(25)

// Casos de prueba
console.assert(
    JSON.stringify(recorridoInorden(raiz)) ===
    JSON.stringify([3, 5, 7, 10, 15, 20, 25]),
    "Error en Inorden"
)

console.assert(
    JSON.stringify(recorridoPreorden(raiz)) ===
    JSON.stringify([10, 5, 3, 7, 20, 15, 25]),
    "Error en Preorden"
)

console.assert(
    JSON.stringify(recorridoPostorden(raiz)) ===
    JSON.stringify([3, 7, 5, 15, 25, 20, 10]),
    "Error en Postorden"
)

console.log("Recorrido Inorden:", recorridoInorden(raiz))
console.log("Recorrido Preorden:", recorridoPreorden(raiz))
console.log("Recorrido Postorden:", recorridoPostorden(raiz))

console.log("Ejercicio 3.1 superado.")