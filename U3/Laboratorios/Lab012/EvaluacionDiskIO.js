const {NodoB, ArbolBPacientes} = require("./NodoB");



// Grado grande simulando disco
let grado = 100;



let arbol = new ArbolBPacientes(grado);



// Simulación de 1 millón de registros

let registros = 1000000;



// Crear raíz
let raiz = new NodoB(grado,false);



// Generar claves simuladas

for(let i=0;i<grado*2;i++){

    raiz.claves.push(i*5000);

}



// Crear hijos

for(let i=0;i<=raiz.claves.length;i++){

    let hijo = new NodoB(grado,true);


    hijo.claves=[
        i*5000+1,
        i*5000+2,
        i*5000+3
    ];


    raiz.hijos.push(hijo);

}



arbol.raiz=raiz;



// Buscar un paciente

let pacienteBuscado = 999999;



let resultado = arbol.buscar(pacienteBuscado);



console.log("-----------------------------");
console.log("SIMULACIÓN ÁRBOL B");
console.log("-----------------------------");

console.log(
    "Registros simulados:",
    registros
);


console.log(
    "Grado del árbol B:",
    grado
);


console.log(
    "Lecturas de disco:",
    NodoB.lecturasDisco
);





// Comparación con AVL


let alturaAVL = Math.ceil(
    Math.log2(registros+1)
);



console.log("-----------------------------");
console.log("SIMULACIÓN AVL");
console.log("-----------------------------");


console.log(
    "Altura aproximada AVL:",
    alturaAVL
);


console.log(
    "Lecturas equivalentes:",
    alturaAVL
);