const name = "Deepak"
const roll = 2300460100050

console.log(name + roll)

console.log(`My Name Is ${name} and my roll number is ${roll} `)  

const hey = new String("deepakhc")

console.log(hey)
console.log(hey[0])

console.log(hey.length)
console.log(hey.toUpperCase())

console.log(hey.charAt(3 ));
console.log(hey.indexOf("p"))



const newstring = hey.substring(0,4)
console.log(newstring)

const another = hey.slice(-1,-7)
console.log(another)

const newone = "   deepak  " 
console.log(newone)
console.log(newone.trim());       // For Space Removing


 const url = "https://google.com"
 console.log(url.replace("/",'-'))