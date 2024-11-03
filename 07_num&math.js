const score = 200
console.log(score)
console.log(typeof (score))

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(3))

const num = 35.9856
console.log(num.toPrecision(3))

const num1 = 10000000
console.log(num1.toLocaleString("en-IN"));

// ***************** MATHS ************************

 console.log(Math)
 console.log(Math.abs(-4));
 console.log(Math.round(4.8)); // ceil, min, max , floor .....
console.log(Math.floor(4.8))

 console.log(Math.random());
 
 console.log(Math.random()*10 );
 
 console.log(Math.floor(Math.random()*10) + 1 ); 

const min = 10
const max = 20

console.log(Math.floor(Math.random()* (max - min +1))+max);
