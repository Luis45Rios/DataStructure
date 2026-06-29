const Pestana = require('./Pestana')
const Pila = require('./Pila')

class Navegador {
    constructor() {
        this.pestanas = []
        this.favoritos = []
        this.historialAtras = new Pila()
        this.historialAdelante = new Pila()
        this.pestanaActual = null
    }

    abrirPestana(titulo, url) {
        const nuevaPestana = new Pestana(titulo, url)
        this.pestanas.push(nuevaPestana)
        if (this.pestanaActual === null) {
            this.pestanaActual = nuevaPestana
        }
        console.log(`\nSe abrió la pestaña "${titulo}"`)
    }

    cerrarPestana(indice) {
        if (indice < 0 || indice >= this.pestanas.length) {
            console.log("\nLa pestaña no existe")
            return
        }
        const eliminada = this.pestanas.splice(indice, 1)[0]
        console.log(`\nSe cerró la pestaña "${eliminada.titulo}"`)
        if (this.pestanas.length === 0) {
            this.pestanaActual = null
            return
        }
        if (this.pestanaActual === eliminada) {
            this.pestanaActual = this.pestanas[0]
        }
    }

    cambiarPestana(indice) {
        if (indice < 0 || indice >= this.pestanas.length) {
            console.log("\nLa pestaña no existe")
            return
        }
        this.pestanaActual = this.pestanas[indice]
        console.log(`\nAhora estás en "${this.pestanaActual.titulo}"`)
    }

    mostrarPestanas() {
        if (this.pestanas.length === 0) {
            console.log("\nNo hay pestañas abiertas")
            return
        }
        console.log("\n========== PESTAÑAS ABIERTAS ==========")
        this.pestanas.forEach((pestana, indice) => {
            let activa = ""

            if (pestana === this.pestanaActual) {
                activa = "  <--- Activa"
            }

            console.log(`${indice + 1}. ${pestana.titulo}${activa}`)
        })
    }

    buscarPestana(nombre) {
        const resultado = this.pestanas.find(pestana =>
            pestana.titulo.toLowerCase() === nombre.toLowerCase()
        )

        if (resultado) {
            console.log("\nPestaña encontrada")
            console.log(`Título : ${resultado.titulo}`)
            console.log(`URL    : ${resultado.url}`)
            console.log(`Visitas: ${resultado.visitas}`)
            return
        }

        console.log("\nNo se encontró la pestaña")
    }
    visitarPagina(url) {
        if (this.pestanaActual === null) {
            console.log("\nPrimero debes abrir una pestaña")
            return
        }
        this.historialAtras.apilar(this.pestanaActual.url)
        this.historialAdelante.limpiar()
        this.pestanaActual.visitar(url)
        console.log(`\nVisitando: ${url}`)
    }

    atras() {
        if (this.pestanaActual === null) {
            console.log("\nNo hay una pestaña activa")
            return
        }

        if (this.historialAtras.estaVacia()) {
            console.log("\nNo hay páginas anteriores")
            return
        }

        this.historialAdelante.apilar(this.pestanaActual.url)
        this.pestanaActual.url = this.historialAtras.desapilar()
        console.log(`\nRegresaste a: ${this.pestanaActual.url}`)
    }

    adelante() {
        if (this.pestanaActual === null) {
            console.log("\nNo hay una pestaña activa")
            return
        }

        if (this.historialAdelante.estaVacia()) {
            console.log("\nNo hay páginas siguientes")
            return
        }

        this.historialAtras.apilar(this.pestanaActual.url)
        this.pestanaActual.url = this.historialAdelante.desapilar()
        console.log(`\nAvanzaste a: ${this.pestanaActual.url}`)
    }

    mostrarHistorial() {
        console.log("\n========== HISTORIAL ==========")
        this.historialAtras.mostrar()
    }

    agregarFavorito() {
        if (this.pestanaActual === null) {
            console.log("\nNo existe una pestaña activa")
            return
        }

        const existe = this.favoritos.some(favorito =>
            favorito.url === this.pestanaActual.url
        )

        if (existe) {
            console.log("\nLa página ya está en favoritos")
            return
        }

        this.favoritos.push({
            titulo: this.pestanaActual.titulo,
            url: this.pestanaActual.url
        })

        console.log("\nPágina agregada a favoritos")
    }

    mostrarFavoritos() {
        if (this.favoritos.length === 0) {
            console.log("\nNo hay favoritos")
            return
        }
        console.log("\n========== FAVORITOS ==========")

        this.favoritos.forEach((favorito, indice) => {
            console.log(`${indice + 1}. ${favorito.titulo}`)
            console.log(`   ${favorito.url}`)
        })
    }

    mostrarEstadisticas() {
        console.log("\n========== ESTADÍSTICAS ==========")
        console.log(`Pestañas abiertas : ${this.pestanas.length}`)
        console.log(`Favoritos         : ${this.favoritos.length}`)
        console.log(`Historial atrás   : ${this.historialAtras.tamano()}`)
        console.log(`Historial adelante: ${this.historialAdelante.tamano()}`)

        if (this.pestanaActual !== null) {
            console.log(`Pestaña activa    : ${this.pestanaActual.titulo}`)
            console.log(`URL actual        : ${this.pestanaActual.url}`)
            console.log(`Visitas           : ${this.pestanaActual.visitas}`)
        }
    }

}

module.exports = Navegador