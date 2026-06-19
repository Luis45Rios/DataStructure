const readline = require('readline');

// Configura la interfaz para leer la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pregunta al usuario
rl.question('Escribe algo y presiona Enter: ', (respuesta) => {
  console.log(`Dato ingresado: ${respuesta}`);
  rl.close(); // Cierra la consola
});
