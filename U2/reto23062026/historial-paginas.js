const readline = require('readline')

class HistorialNavegador {
    constructor() {
        this.paginas = []
    }

    visitarPagina(url) {
        this.paginas.push(url)
        console.log(`Visitando: ${url}`)
    }

    volverAtras() {
        if (this.paginas.length === 0) {
            console.log('No hay páginas en el historial')
            return
        }

        const pagina = this.paginas.pop()
        console.log(`Saliendo de: ${pagina}`)
    }

    mostrarHistorial() {
        if (this.paginas.length === 0) {
            console.log('El historial está vacío')
            return
        }

        console.log('\nHistorial de navegación:')

        for (let i = this.paginas.length - 1; i >= 0; i--) {
            console.log(`${this.paginas.length - i}. ${this.paginas[i]}`)
        }
    }
}

const navegador = new HistorialNavegador()

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function menu() {
    console.log('\n=== NAVEGADOR WEB ===')
    console.log('1. Visitar página')
    console.log('2. Atrás')
    console.log('3. Ver historial')
    console.log('4. Salir')

    rl.question('Seleccione una opción: ', function(opcion) {
        switch (opcion) {
            case '1':
                rl.question('Ingrese la URL: ', function(url) {
                    navegador.visitarPagina(url)
                    menu()
                })
                break

            case '2':
                navegador.volverAtras()
                menu()
                break

            case '3':
                navegador.mostrarHistorial()
                menu()
                break

            case '4':
                console.log('Navegador cerrado')
                rl.close()
                break

            default:
                console.log('Opción no válida')
                menu()
        }
    })
}

menu()