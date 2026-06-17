// Condicional Simple
let edad = 20;

if (edad >= 18) {
    console.log("Eres mayor de edad.");
}

//Condicional doble
let temperatura = 15;

if (temperatura > 25) {
    console.log("Hace calor.");
} else {
    console.log("Hace frío.");
}

// Condicional multiple
let nota = 85;

if (nota >= 90) {
    console.log("Excelente");
} else if (nota >= 70) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

// Switch
let rol = "admin";

switch (rol) {
    case "admin":
        console.log("Tienes acceso completo al sistema.");
        break;

    case "editor":
        console.log("Puedes editar contenido.");
        break;

    case "usuario":
        console.log("Puedes ver el contenido.");
        break;

    default:
        console.log("Rol no reconocido.");
}

let nombre = "Fernando"

if (nombre === "Cristian") {
    console.log("Hola Fer")
} else if (nombre === "Cristian") {
    console.log("Hola Cris")
} else {
    console.log("No encontre tu nombre")
}