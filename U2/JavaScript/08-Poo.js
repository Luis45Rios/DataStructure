class Estudiante {
    constructor(nombre, carrera) {
        this.nombre = nombre;
        this.carrera = carrera;
    }

    presentarse() {
        console.log(`Hola, soy ${this.nombre} y estudio ${this.carrera}.`);
    }

    estudiar() {
        console.log(`${this.nombre} está estudiando.`);
    }
}

const estudiante1 = new Estudiante("Luis", "Ingeniería en Computación");

estudiante1.presentarse();
estudiante1.estudiar();