class Pestana {
    constructor(titulo, url) {
        this.titulo = titulo
        this.url = url
        this.fechaApertura = new Date().toLocaleString()
        this.visitas = 1
    }

    visitar(url) {
        this.url = url
        this.visitas++
    }

    obtenerInformacion() {
        return {
            titulo: this.titulo,
            url: this.url,
            visitas: this.visitas,
            fecha: this.fechaApertura
        }
    }
}

module.exports = Pestana