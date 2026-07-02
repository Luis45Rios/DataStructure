var height;
console.log(height); // -> undefined
console.log(weight); // -> Uncaught ReferenceError: weight is not defined

// ======================================== LET ===============================================================
let height = 180;
let anotherHeight = height;
let weight;
console.log(height);  //  ->  180
console.log(anotherHeight);  //  ->  180
weight = 70;
console.log(weight);  //  ->  70

let height = 180;
console.log(height);  //  ->  180
console.log("height");  //  ->  height

let steps = 100;
console.log(steps);  //  ->  100
steps = 120;  //  ->  120
console.log(steps);
steps = steps + 200;
console.log(steps);  //  ->  320

let greeting = "Hello!";
let counter = 100;
console.log(greeting);  //  ->  Hello!
greeting = 1;
console.log(greeting);  //  ->  1
greeting = "Hello!";
greeting = greeting + counter;
console.log(greeting);  //  ->  Hello!100

// ================================================= CONST ====================================================
const greeting = "Hello!";

const greeting;  //  ->  Uncaught  SyntaxError:  Missing  initializer  in  const  declaration
greeting = "Hello!";

const greeting = "Hello!";
greeting = "Hi!";  //  ->  Uncaught  TypeError:  Assignment  to  constant  variable.

// =============================================== SCOPE ======================================================
let counter;
console.log(counter);  //  ->  undefined
{
    counter = 1;
    console.log(counter);  //  ->  1
}
counter = counter + 1;
console.log(counter);  //  ->  2


let counter;
console.log(counter);  //  ->  undefined
{
    counter = 1;
    {
        console.log(counter);  //  ->  1
    }
}
counter = counter + 1;
console.log(counter);  //  ->  2


let height = 180;
{
    let weight = 70;
    console.log(height);  //  ->  180
    console.log(weight);  //  ->  70	
}
console.log(height);  //  ->  180
console.log(weight);  //  ->  Uncaught  ReferenceError:  weight  is  not  defined


let height = 200;
{
    let weight = 100;
    {
        let info = "tall";
        console.log(height);  //  ->  200
        console.log(weight);  //  ->  100
        console.log(info);  //  ->  tall
    }
    console.log(height);  //  ->  200
    console.log(weight);  //  ->  100
    console.log(info);  //  ->  Uncaught  ReferenceError:  info  is  not  defined
}


let height = 200;
{
    let weight = 100;
    {
        let info = "tall";
        console.log(height);  //  ->  200
        console.log(weight);  //  ->  100
        console.log(info);  //  ->  tall
    }
    console.log(height);  //  ->  200
    console.log(weight);  //  ->  100
    console.log(info);  //  ->  Uncaught  ReferenceError:  info  is  not  defined
}

// ============================================ UN POCO DEFUNCIONES ===========================================
function testFunction() {
    console.log("Hello");
    console.log("World");
}

console.log("let's  begin:");  //  ->  let's  begin:
console.log("Hello");  //  ->  Hello
console.log("World");  //  ->  World
console.log("and  again:");  //  ->  and  again:
console.log("Hello");  //  ->  Hello
console.log("World");  //  ->  World
console.log("and  once  more:");  //  ->  and  once  more:
console.log("Hello");  //  ->  Hello
console.log("World");  //  ->  World

// ============================================== SECTION QUIZ ================================================

// Question 1
let rosePrice = 8;
let lilyPrice = 10;
let tulipPrice = 2;

let numberOfRoses = 70;
let numberOfLilies = 50;
let numberOfTulips = 120;

let rosesValue = rosePrice * numberOfRoses;
let liliesValue = lilyPrice * numberOfLilies;
let tulipsValue = tulipPrice * numberOfTulips;

let total = rosesValue + liliesValue + tulipsValue;
console.log("Rose – unit price:", rosePrice, ", quantity:", numberOfRoses, ", value:", rosesValue);
console.log("Lily – unit price:", lilyPrice, ", quantity:", numberOfLilies, ", value:", liliesValue);
console.log("Tulip – unit price:", tulipPrice, ", quantity:", numberOfTulips, ", value:", tulipsValue);
console.log("Total: ", total);

// Question 2
const rosePrice = 8;
const lilyPrice = 10;
const tulipPrice = 2;

let numberOfRoses = 70;
let numberOfLilies = 50;
let numberOfTulips = 120;

let rosesValue = rosePrice * numberOfRoses;
let liliesValue = lilyPrice * numberOfLilies;
let tulipsValue = tulipPrice * numberOfTulips;

let total = rosesValue + liliesValue + tulipsValue;

console.log("Rose – unit price:", rosePrice, ", quantity:", numberOfRoses, ", value:", rosesValue);
console.log("Lily – unit price:", lilyPrice, ", quantity:", numberOfLilies, ", value:", liliesValue);
console.log("Tulip – unit price:", tulipPrice, ", quantity:", numberOfTulips, ", value:", tulipsValue);
console.log("Total: ", total);

numberOfRoses = numberOfRoses - 20;
numberOfLilies = numberOfLilies - 30;

rosesValue = rosePrice * numberOfRoses;
liliesValue = lilyPrice * numberOfLilies;
tulipsValue = tulipPrice * numberOfTulips;

total = rosesValue + liliesValue + tulipsValue;

console.log("Rose – unit price:", rosePrice, ", quantity:", numberOfRoses, ", value:", rosesValue);
console.log("Lily – unit price:", lilyPrice, ", quantity:", numberOfLilies, ", value:", liliesValue);
console.log("Tulip – unit price:", tulipPrice, ", quantity:", numberOfTulips, ", value:", tulipsValue);
console.log("Total: ", total);