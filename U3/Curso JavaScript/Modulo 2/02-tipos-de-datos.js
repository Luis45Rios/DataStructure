/* Pregunta 1:
Escribe un código que cree variables y las inicialice con valores de los tipos
Boolean, Number, BigInt, String e indefinido utilizando (siempre que sea posible)
literales y funciones constructoras.
*/

let b1 = true;
let b2 = Boolean(true);

let n1 = 100;
let n2 = Number(200);

let bi1 = 100n;
let bi2 = BigInt(200);

let s1 = "Hello";
let s2 = String("Hello");

let u1 = undefined;


/* Pregunta 2:
Imprime todos los valores y todos los tipos de esos valores.
*/

console.log(`${b1} [${typeof b1}]`);
console.log(`${b2} [${typeof b2}]`);
console.log(`${n1} [${typeof n1}]`);
console.log(`${n2} [${typeof n2}]`);
console.log(`${bi1} [${typeof bi1}]`);
console.log(`${bi2} [${typeof bi2}]`);
console.log(`${s1} [${typeof s1}]`);
console.log(`${s2} [${typeof s2}]`);
console.log(`${u1} [${typeof u1}]`);


/* Pregunta 3:
Realiza una cadena de conversiones.
*/

let boolConversion1 = Boolean(BigInt(Number("1234")));
console.log(`${boolConversion1} [${typeof boolConversion1}]`);

// Otra forma
let cadena = "1234";
let numero = Number(cadena);
let bigInt = BigInt(numero);
let boolConversion2 = Boolean(bigInt);

console.log(`${boolConversion2} [${typeof boolConversion2}]`);


/* Pregunta 4:
Intenta sumar dos valores del mismo tipo y comprueba el tipo del resultado.
*/

let sumaBoolean = true + false;
let sumaNumber = 100 + 200;
let sumaBigInt = 100n + 200n;
let sumaString = "He" + "llo";
let sumaUndefined = undefined + undefined;

console.log(`${sumaBoolean} [${typeof sumaBoolean}]`);      // number
console.log(`${sumaNumber} [${typeof sumaNumber}]`);
console.log(`${sumaBigInt} [${typeof sumaBigInt}]`);
console.log(`${sumaString} [${typeof sumaString}]`);
console.log(`${sumaUndefined} [${typeof sumaUndefined}]`);  // number (NaN)


/* Pregunta 5:
Intenta sumar dos valores de tipos diferentes y comprueba los resultados.
*/

let mezclaBoolNum = true + 100;
// let mezclaBoolBigInt = true + 100n; // Error
let mezclaBoolString = true + "100";

// let mezclaNumBigInt = 100 + 200n; // Error
let mezclaNumBool = 100 + true;
let mezclaNumString = 100 + "200";

// let mezclaBigIntNum = 100n + 200; // Error
// let mezclaBigIntBool = 100n + true; // Error
let mezclaBigIntString = 100n + "200";

let mezclaStringNum = "100" + 200;
let mezclaStringBigInt = "100" + 200n;
let mezclaStringBool = "100" + true;
let mezclaTextoNum = "abc" + 200;
let mezclaTextoBigInt = "abc" + 200n;
let mezclaTextoBool = "abc" + true;

console.log(`${mezclaBoolNum} [${typeof mezclaBoolNum}]`);          // 101 [number]
console.log(`${mezclaBoolString} [${typeof mezclaBoolString}]`);    // true100 [string]
console.log(`${mezclaNumBool} [${typeof mezclaNumBool}]`);          // 101 [number]
console.log(`${mezclaNumString} [${typeof mezclaNumString}]`);      // 100200 [string]
console.log(`${mezclaBigIntString} [${typeof mezclaBigIntString}]`);// 100200 [string]
console.log(`${mezclaStringNum} [${typeof mezclaStringNum}]`);      // 100200 [string]
console.log(`${mezclaStringBigInt} [${typeof mezclaStringBigInt}]`);// 100200 [string]
console.log(`${mezclaStringBool} [${typeof mezclaStringBool}]`);    // 100true [string]
console.log(`${mezclaTextoNum} [${typeof mezclaTextoNum}]`);        // abc200 [string]
console.log(`${mezclaTextoBigInt} [${typeof mezclaTextoBigInt}]`);  // abc200 [string]
console.log(`${mezclaTextoBool} [${typeof mezclaTextoBool}]`);      // abctrue [string]


/* Pregunta 6:
Modifica la línea para obtener el resultado 43.
*/

const str1 = 42 + +"1";
console.log(str1);