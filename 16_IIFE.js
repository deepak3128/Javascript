// Immw\ediately Invoked Functions Expressions (IIFE)

const { name } = require("commander");


(function hey (){

    // Named IIFE

    console.log(`hey`);
})();

// For 2 IIFE use (;)

((name) => {    // Parameter (name)

    // SIMPLE IIFE

console.log(`HEY2 ${name}`);

    
})( `Deepak`)

// Falsy value 

// false , 0 ,-0,BigInt 0n, "",null, undefined , NaN


// True Value 

// "0" , 'False' , " " , {} , [] , function(){}


// To check Arrsy is empty 

if (usermail.length === 0){
    console.log("Array is empty");
    
}


// To check Object is empty

const object = {}

if(object.key(object).length === 0){
    console.log("Object is empty");
    
}


//  Nullish Coalescing Operator (??): Null Undefined    

let val1;
val1 = 5 ?? 10

val1 = null ?? 15

val1 = undefined ?? 20

val1 =  null ?? 10 ?? 20


console.log(val1);


// Terniary Operator 

// Conditions ? true : false

const one = 1;
 one != 2 ? console.log("True") : console.log("False");
 
 
