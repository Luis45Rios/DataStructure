const { NodoB, ArbolBPacientes } = require("./NodoB");


// Crear árbol B grado mínimo 2
let arbol = new ArbolBPacientes(2);


// Crear nodo raíz
let raiz = new NodoB(2, false);


// Claves del nodo raíz
raiz.claves = [10, 20, 30];


// Crear los 4 hijos necesarios
let hijo0 = new NodoB(2, true);
hijo0.claves = [5, 8];

let hijo1 = new NodoB(2, true);
hijo1.claves = [12, 15];

let hijo2 = new NodoB(2, true);
hijo2.claves = [22, 25];

let hijo3 = new NodoB(2, true);
hijo3.claves = [40, 50];

// Conectar hijos
raiz.hijos = [
    hijo0,
    hijo1,
    hijo2,
    hijo3
];

// Asignar raíz
arbol.raiz = raiz;

// Buscar pacientes
let encontrado = arbol.buscar(20);

if (encontrado) {
    console.log("Paciente encontrado en nodo:", encontrado.claves);
} else {
    console.log("Paciente no encontrado");
}

let noExiste = arbol.buscar(99);

if (noExiste) {
    console.log("Paciente encontrado");
}else {
    console.log("Paciente 99 no existe");
}