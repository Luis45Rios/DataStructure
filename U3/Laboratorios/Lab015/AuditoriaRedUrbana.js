// AuditoriaRedUrbana.js

class AuditoriaRedUrbana {
    constructor() {
        this.centrosAcopio = new Map();
    }

    registrarCentro(id) {
        if (!this.centrosAcopio.has(id)) {
            this.centrosAcopio.set(id, []);
        }
    }

    registrarPaquete(idCentro, paquete) {
        this.registrarCentro(idCentro);
        this.centrosAcopio.get(idCentro).push(paquete);
    }

    consultarCentro(idCentro) {
        return this.centrosAcopio.get(idCentro) || [];
    }

    eliminarPaquete(idCentro) {
        if (
            this.centrosAcopio.has(idCentro) &&
            this.centrosAcopio.get(idCentro).length > 0
        ) {
            this.centrosAcopio.get(idCentro).pop();
        }
    }

    pruebaEstres(eventos) {
        console.log("======================================");
        console.log("INICIANDO PRUEBA DE ESTRÉS - UNLD");
        console.log("======================================");

        for (let i = 1; i <= eventos; i++) {

            // Distribución uniforme estandarizada U(0,1)
            const operacion = Math.random();

            // Centro de acopio aleatorio (0-99)
            const idCentro = Math.floor(Math.random() * 100);

            if (operacion < 0.33) {
                // Registrar paquete
                this.registrarPaquete(idCentro, `Paquete-Eco-${i}`);

            } else if (operacion < 0.66) {
                // Consultar centro
                this.consultarCentro(idCentro);

            } else {
                // Eliminar paquete
                this.eliminarPaquete(idCentro);
            }
        }

        console.log("======================================");
        console.log("PRUEBA FINALIZADA");
        console.log(`Centros registrados: ${this.centrosAcopio.size}`);

        let totalPaquetes = 0;
        for (const paquetes of this.centrosAcopio.values()) {
            totalPaquetes += paquetes.length;
        }

        console.log(`Paquetes almacenados: ${totalPaquetes}`);
        console.log("======================================");
    }
}

// Programa principal
const auditoria = new AuditoriaRedUrbana();

// Simulación de 10 000 eventos concurrentes
auditoria.pruebaEstres(10000);