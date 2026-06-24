function busquedaBinariaRecursiva(arr, objetivo, bajo, alto) {
    // Caso base: rango inválido
    if (bajo > alto) {
        return -1
    }

    // Punto medio
    const medio = Math.floor((bajo + alto) / 2)

    // Caso base: elemento encontrado
    if (arr[medio] === objetivo) {
        return medio
    }

    // Buscar en la mitad izquierda
    if (objetivo < arr[medio]) {
        return busquedaBinariaRecursiva(
            arr,
            objetivo,
            bajo,
            medio - 1
        )
    }

    // Buscar en la mitad derecha
    return busquedaBinariaRecursiva(
        arr,
        objetivo,
        medio + 1,
        alto
    )
}

// Casos de prueba para validación
const datosOrdenados = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]

console.assert(
    busquedaBinariaRecursiva(datosOrdenados, 23, 0, 9) === 5,
    "Error al buscar 23"
)

console.assert(
    busquedaBinariaRecursiva(datosOrdenados, 100, 0, 9) === -1,
    "Error al buscar 100"
)

console.log("Ejercicio 2.2 superado.")