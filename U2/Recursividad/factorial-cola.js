function factorialCola(n, acumulador = 1) {
    // Caso base
    if (n === 0 || n === 1) {
        return acumulador
    }

    // Llamada recursiva en cola
    return factorialCola(n - 1, n * acumulador)
}

console.log(factorialCola(5)) // 120
console.log(factorialCola(0)) // 1