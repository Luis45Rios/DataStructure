const readline = require('readline')
const Navegador = require('./Navegador')

class Menu {
    constructor() {
        this.navegador = new Navegador()
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
    }

    iniciar() {
        this.menu()
    }

    menu() {
        console.log("\n==============================")
        console.log(" GESTOR DE PESTAÑAS WEB")
        console.log("==============================")
        console.log("1. Abrir pestaña")
        console.log("2. Cerrar pestaña")
        console.log("3. Cambiar pestaña")
        console.log("4. Mostrar pestañas")
        console.log("5. Visitar página")
        console.log("6. Atrás")
        console.log("7. Adelante")
        console.log("8. Mostrar historial")
        console.log("9. Agregar a favoritos")
        console.log("10. Mostrar favoritos")
        console.log("11. Buscar pestaña")
        console.log("12. Estadísticas")
        console.log("13. Salir")

        this.rl.question("\nSeleccione una opción: ", opcion => {
            switch (opcion) {
                case "1":
                    this.rl.question("Título: ", titulo => {
                        this.rl.question("URL: ", url => {
                            this.navegador.abrirPestana(titulo, url)
                            this.menu()
                        })
                    })
                    break

                case "2":
                    this.navegador.mostrarPestanas()
                    this.rl.question("Número de pestaña: ", numero => {
                        this.navegador.cerrarPestana(Number(numero) - 1)
                        this.menu()
                    })
                    break

                case "3":
                    this.navegador.mostrarPestanas()
                    this.rl.question("Número de pestaña: ", numero => {
                        this.navegador.cambiarPestana(Number(numero) - 1)
                        this.menu()
                    })
                    break

                case "4":
                    this.navegador.mostrarPestanas()
                    this.menu()
                    break

                case "5":
                    this.rl.question("Nueva URL: ", url => {
                        this.navegador.visitarPagina(url)
                        this.menu()
                    })
                    break

                case "6":
                    this.navegador.atras()
                    this.menu()
                    break

                case "7":
                    this.navegador.adelante()
                    this.menu()
                    break

                case "8":
                    this.navegador.mostrarHistorial()
                    this.menu()
                    break

                case "9":
                    this.navegador.agregarFavorito()
                    this.menu()
                    break

                case "10":
                    this.navegador.mostrarFavoritos()
                    this.menu()
                    break

                case "11":
                    this.rl.question("Nombre de la pestaña: ", nombre => {
                        this.navegador.buscarPestana(nombre)
                        this.menu()
                    })
                    break

                case "12":
                    this.navegador.mostrarEstadisticas()
                    this.menu()
                    break

                case "13":
                    console.log("\nHasta pronto!!")
                    this.rl.close()
                    break

                default:
                    console.log("\nOpción inválida")
                    this.menu()
            }
        })
    }
}

module.exports = Menu