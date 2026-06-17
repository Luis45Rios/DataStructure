let expresion = "mangos"

switch (expresion) {
    case "mangos":
        console.log("Los mangos x5 cuestan $1")
        break;
        
    case "naranjas":
        console.log("Los mangos x10 cuestan $1")
        break;

    case "manzanas":
        console.log("Las manzanzas x5 por $1")
    default:
        console.log(`Lo siento no tenemos ${expresion}`)
        break;
}

console.log("¿Quieres comprar algo adicional?")