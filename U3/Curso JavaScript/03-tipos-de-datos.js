let year = 1990;
console.log(year); // -> 1990
console.log(1991); // -> 1991
console.log("Alice"); // -> Alice

let year = 1990;
console.log(typeof year);  //  ->  number
console.log(typeof 1991);  //  ->  number

let name = "Alice";
console.log(typeof name);  //  ->  string
console.log(typeof "Bob");  //  ->  string

let typeOfYear = typeof year;
console.log(typeOfYear);  //  ->  number
console.log(typeof typeOfYear);  //  ->  string

let isDataValid = true;
let isStringTooLong = false;
let isGameOver = false;
continueLoop = true;

console.log(false);  //  ->  false
console.log(typeof false);  //  ->  boolean
console.log(isDataValid);  //  ->  true
console.log(typeof isDataValid);  //  ->  boolean

// Number
const year = 1991;
let delayInSeconds = 0.00016;
let area = (16 * 3.14);
let halfArea = area / 2;

console.log(year);  //  ->  1991;
console.log(typeof year);  //  ->  number;

let a = 10;  //  decimal  -  default  
let b = 0x10;  //  hexadecimal  
let c = 0o10;  //  octal  
let d = 0b10;  //  binary  

console.log(a);  //  ->  10  
console.log(b);  //  ->  16  
console.log(c);  //  ->  8  
console.log(d);  //  ->  2  

let x = 9e3;
let y = 123e-5;
console.log(x);  //  ->  9000
console.log(y);  //  ->  0.00123

let a = 1 / 0;
let b = -Infinity;

console.log(a);  //  ->  Infinity
console.log(b);  //  ->  -Infinity
console.log(typeof a);  //  ->  number
console.log(typeof b);  //  ->  number

let s = "it's  definitely  not  a  number";
let n = s * 10;
console.log(n);  //  ->  NaN
console.log(typeof n);  //  ->  number

// BigInt
let big = 1234567890000000000000n;
let big2 = 1n;

console.log(big);  //  ->  1234567890000000000000n
console.log(typeof big);  //  ->  bigint

console.log(big2);  //  ->  1n
console.log(7n / 4n);  //  ->  1n

let big3 = 1000n + 20; //  ->  Uncaught  TypeError:  Cannot  mix  BigInt  and  other  types,  use  explicit  conversions

let big4 = 1000n / 0n;  //  ->  Uncaught  RangeError:  Division  by  zero

// String
let country = "Malawi";
let continent = 'Africa';

console.log(country);  //  ->  Malawi
console.log(typeof country);  //  ->  string
console.log(continent);  //  ->  Africa
console.log(typeof continent);  //  ->  string

let message1 = "The  vessel  'Mars'  called  at  the  port.";
let message2 = 'Cyclone  "Cilida"  to  pass  close  to  Mauritius.';

console.log(message1);  //  ->  The  vessel  'Mars'  called  at  the  port.
console.log(message2);  //  ->  Cyclone  "Cilida"  to  pass  close  to  Mauritius.

let message1 = 'The  vessel  \'Mars\'  called  at  the  port.';
let message2 = "Cyclone  \"Cilida\"  to  pass  close  to  Mauritius.";


console.log(message1);  //  ->  The  vessel  'Mars'  called  at  the  port.
console.log(message2);  //  ->  Cyclone  "Cilida"  to  pass  close  to  Mauritius.


let path = "C:\\Windows";
console.log(path);  //  ->  C:\Windows


let path = "C:\\Windows" - "Windows";
console.log(path);  //  ->  NaN


let test = "100" - "10";
console.log(test);  //  ->  90
console.log(typeof test);  //  ->  number


let country = "Malawi";
let continent = "Africa";


let sentence = `  ${country}  is  located  in  ${continent}.`;
console.log(sentence);  //  ->  Malawi  is  located  in  Africa.


console.time();
console.log("test  console");  //  ->  test  console
console.timeEnd();  //  ->  default:  0.108154296875  ms


let river = "Mekong";
let character = river.charAt(2);
console.log(character);  //  ->  k


let str = "java  script  language";

console.log(str.length);  //  ->  20
console.log('test'.length);  //  ->  4

console.log(str.charAt(0));  //  ->  'j'
console.log('abc'.charAt(1));  //  ->  'b'

console.log(str.slice(0, 4));  //  ->  'java'
console.log('test'.slice(1, 3));  //  ->  'es'

console.log(str.split('  '));  //  ->  ['java',  'script',  'language']
console.log('192.168.1.1'.split('.'));    //  ->  ['192',  '168',  '1',  '1']

// Symbol
let someResource;
console.log(someResource);  //  ->  undefined
console.log(typeof someResource);  //  ->  undefined

someResource = null;
console.log(someResource);  //  ->  null
console.log(typeof someResource);  //  ->  object


// Tipo de Conversiones
const str = String();
const num = Number();
const bool = Boolean();

console.log(str);  //  ->
console.log(num);  //  ->  0
console.log(bool);  //  ->  false

const big1 = BigInt(42);
console.log(big1);  //  ->  42n

const big2 = BigInt();      //  ->  Uncaught  TypeError:  Cannot  convert  undefined  to  a  BigInt


// Conversiones
const  num = 42;

const strFromNum1 = String(num);
const strFromNum2 = String(8);
const strFromBool = String(true);
const numFromStr = Number("312");
const boolFromNumber = Boolean(0);

// Section Practice
// Question 1
let b1 = true;
let b2 = Boolean(true);

let n1 = 100;
let n2 = Number(200);

let bi1 = 100n;
let bi2 = BigInt(200);

let s1 = "Hello";
let s2 = String("Hello");

let u1 = undefined;

//Question 2
console.log(`${b1} [${typeof b1}]`);
console.log(`${b2} [${typeof b2}]`);
console.log(`${n1} [${typeof n1}]`);
console.log(`${n2} [${typeof n2}]`);
console.log(`${bi1} [${typeof bi1}]`);
console.log(`${bi2} [${typeof bi2}]`);
console.log(`${s1} [${typeof s1}]`);
console.log(`${s2} [${typeof s2}]`);
console.log(`${u1} [${typeof u1}]`);

// Question 3
let b = Boolean( BigInt(Number("1234")));
console.log(`${b} [${typeof b}]`);

// or

let s = "1234";
let n = Number(s);
let bi = BigInt(n);
let b = Boolean(bi);
console.log(`${b} [${typeof b}]`);

// Question 4
let b = true + false;
let n = 100 + 200;
let bi = 100n + 200n;
let s = "He" + "llo";
let u = undefined + undefined;

console.log(`${b} [${typeof b}]`); // !!! number 
console.log(`${n} [${typeof n}]`);
console.log(`${bi} [${typeof bi}]`);
console.log(`${s} [${typeof s}]`);
console.log(`${u} [${typeof u}]`); // !!! number

// Question 5
let b1 = true + 100; 
// let b2 = true + 100n; // -> error!
let b3 = true + "100"; 
// let n1 = 100 + 200n; // -> error!
let n2 = 100 + true;
let n3 = 100 + "200";
// let bi1 = 100n + 200;  // -> error!
// let bi2 = 100n + true  // -> error!
let bi3 = 100n + "200"; 
let s1 = "100" + 200;
let s2 = "100" + 200n;
let s3 = "100" + true;
let s4 = "abc" + 200;
let s5 = "abc" + 200n;
let s6 = "abc" + true;

console.log(`${b1} [${typeof b1}]`);    // -> 101 [number]
// console.log(`${b2} [${typeof b2}]`);
console.log(`${b3} [${typeof b3}]`);    // -> true100 [string]
// console.log(`${n1} [${typeof n1}]`);
console.log(`${n2} [${typeof n2}]`);    // -> 101 [number]
console.log(`${n3} [${typeof n3}]`);    // -> 100200 [string]
// console.log(`${bi1} [${typeof bi1}]`);
// console.log(`${bi2} [${typeof bi2}]`);
console.log(`${bi3} [${typeof bi3}]`);  // -> 100200 [string]
console.log(`${s1} [${typeof s1}]`);    // -> 100200 [string]
console.log(`${s2} [${typeof s2}]`);    // -> 100200 [string]
console.log(`${s3} [${typeof s3}]`);    // -> 100true [string]
console.log(`${s4} [${typeof s4}]`);    // -> abc200 [string]
console.log(`${s5} [${typeof s5}]`);    // -> abc200 [string]
console.log(`${s6} [${typeof s6}]`);    // -> abctrue [string]

// Question 6
const str1 = 42 + +"1";