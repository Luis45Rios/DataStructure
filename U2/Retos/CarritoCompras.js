import readline from "readline/promises"
import { stdin as input, stdout as output } from "process"

const rl = readline.createInterface({ input, output })

const inventario = [
    { id: 1, nombre: "Laptop", precio: 800, stock: 5 },
    { id: 2, nombre: "Mouse", precio: 20, stock: 10 },
    { id: 3, nombre: "Teclado", precio: 35, stock: 8 }
] 

const carrito = [] 

function mostrarProductos() {
    console.log("\n=== INVENTARIO ===") 

    inventario.forEach(producto => {
        console.log(
            `${producto.id}. ${producto.nombre} | $${producto.precio} | Stock: ${producto.stock}`
        )
    })
}

function agregarProducto(id, cantidad) {
    const producto = inventario.find(p => p.id === id)

    if (!producto) {
        console.log("Producto no encontrado.") 
        return 
    }

    if (cantidad > producto.stock) {
        console.log("Stock insuficiente.") 
        return 
    }

    producto.stock -= cantidad 

    const existente = carrito.find(p => p.id === id) 

    if (existente) {
        existente.cantidad += cantidad 
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad
        }) 
    }

    console.log("Producto agregado.") 
}

function mostrarCarrito() {
    if (carrito.length === 0) {
        console.log("\nCarrito vacío.") 
        return 
    }

    let total = 0 

    console.log("\n=== CARRITO ===") 

    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad 
        total += subtotal 

        console.log(
            `${item.nombre} | Cantidad: ${item.cantidad} | Subtotal: $${subtotal}`
        ) 
    }) 

    console.log(`Total: $${total}`) 
}

async function menu() {
    let opcion 

    do {
        console.log(`
1. Ver productos
2. Agregar producto
3. Ver carrito
4. Salir
        `) 

        opcion = await rl.question("Seleccione una opcion: ") 

        switch (opcion) {
            case "1":
                mostrarProductos() 
                break 

            case "2":
                mostrarProductos() 

                const id = parseInt(
                    await rl.question("ID del producto: ")
                ) 

                const cantidad = parseInt(
                    await rl.question("Cantidad: ")
                ) 

                agregarProducto(id, cantidad) 
                break 

            case "3":
                mostrarCarrito() 
                break 

            case "4":
                console.log("Programa finalizado.") 
                break 

            default:
                console.log("Opcion invalida.") 
        }
    } while (opcion !== "4") 

    rl.close() 
}

menu() 