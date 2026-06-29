class Pila {
    constructor() {
        this.elementos = []
    }

    apilar(elemento) {
        this.elementos.push(elemento)
    }

    desapilar() {
        if (this.estaVacia()) {
            return null
        }
        return this.elementos.pop()
    }

    cima() {
        if (this.estaVacia()) {
            return null
        }
        return this.elementos[this.elementos.length - 1]
    }

    estaVacia() {
        return this.elementos.length === 0
    }

    tamano() {
        return this.elementos.length
    }

    limpiar() {
        this.elementos = []
    }

    mostrar() {
        if (this.estaVacia()) {
            console.log("No hay elementos")
            return
        }

        console.log()

        for (let i = this.elementos.length - 1; i >= 0; i--) {
            const elemento = this.elementos[i]

            if (typeof elemento === "object") {
                console.log(`${this.elementos.length - i}. ${elemento.titulo}`)
            } else {
                console.log(`${this.elementos.length - i}. ${elemento}`)
            }
        }
    }

}

module.exports = Pila