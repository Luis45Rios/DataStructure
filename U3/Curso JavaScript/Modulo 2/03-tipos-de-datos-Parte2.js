// SECCION DE PRACTICA

/* Pregunta 1: Crea un objeto que describa un billete de tren y guárdalo en la variable «ticket». El objeto debe tener tres campos:

    * Estación de salida (clave «from»; introduce como valor el nombre de la estación más cercana a tu zona);
    * Estación de destino (clave «to»; introduce como valor cualquier otra estación situada a menos de 100 km);
    * El precio del billete (clave «price», introduce como valor la cantidad que te gustaría pagar por este billete).
El objeto debe crearse utilizando llaves, dentro de las cuales se enumerarán inmediatamente todos los campos creados. A continuación, muestra los valores de todos los campos del billete en la consola. */

let ticket = {
    from: "Loja",
    to: "Quito",
    price: 25
}

console.log(`Ticket from: ${ticket.from} city`)
console.log(`Ticket to: ${ticket.to} city`)
console.log(`Ticket price: $${ticket.price}`)

/* Prefunta 2: Pregunta 2: Declara un objeto vacío y guárdalo en una variable llamada «person». Utilizando la notación de puntos, añade los campos «nombre» y «apellidos» al objeto introduciendo tus datos como valores. Intenta mostrar cada uno de los campos en la consola. */

let person = {}
person.nombre = "Luis"
person.apellidos = "Rios"
console.log(`${person.nombre} ${person.apellidos}`)

/* Pregunta 3: Estamos creando nuestra pequeña biblioteca de libros sobre programación en JavaScript. Tenemos tres libros y queremos elaborar una lista con ellos. Almacenaremos tres datos sobre cada libro: título, autor y número de páginas:
    Speaking JavaScript, Axel Rauschmayer, 460;
    Programming JavaScript Applications, Eric Elliott, 254;
    Understanding ECMAScript 6, Nicholas C. Zakas, 352.
Crea un array de tres objetos que representen los libros. Cada objeto debe tener las siguientes propiedades: título, autor y páginas. */

let books = [
    {
        title: "Speaking JavaScript",
        author: "Axel Rauschmayer",
        pages: 460
    },
    {
        title: "Programing JavaScript Applications",
        author: "Eric Elliott",
        pages: 254
    },
    {
        title: "Understanding ECMAScript 6",
        author: "Nicolas C. Zakas",
        pages: 352
    }
]

/* Pregunta 4: Añade un nuevo libro a la colección: «Learning JavaScript Design Patterns», de Addy Osmani, 254 páginas. Utiliza el método adecuado para hacerlo, de modo que el libro se añada al final de la matriz. Muestra la longitud de la matriz y, a continuación, todos los títulos de los libros de la colección. */

let newBook = {
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    pages: 254
}

books.push(newBook)
console.log(books.length)
console.log(books[0].title)
console.log(books[1].title)
console.log(books[2].title)
console.log(books[3].title)

/* Pregunta 5: Utiliza el comando «slice» para copiar los dos últimos libros en la nueva matriz. */

let selectedBooks = books.slice(-2)
console.log(selectedBooks)

/* Pregunta 6: El primer libro de la colección se ha perdido en circunstancias inexplicables. Ya has aceptado la pérdida, así que elimínalo de la matriz. ¿Qué método utilizarás para ello? Muestra la longitud de la matriz y, uno por uno, todos los títulos de los libros de la colección. */

books.shift()
console.log(books.length)
console.log(books[0].title)
console.log(books[1].title)
console.log(books[2].title)

/* Pregunta 7: Muestra la suma de las páginas de todos los libros de la colección. */

let bookSum = books[0].pages + books[1].pages + books[2].pages
console.log(`Total Pages: ${bookSum}`)