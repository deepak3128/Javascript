const marvel = ["thor",'spidy',"rdj"]
const dc = ['batman','superman','flash']


// marvel.push(dc)

// console.log(marvel);
// console.log(marvel[3][1]);

const allne = marvel.concat(dc)
// console.log(allne)


const allnew = [...marvel,...dc]
// console.log(allnew);


const anotherArr = [1,2,3,[4,5,6,7,],,8,[9,10]]

const realAA = anotherArr.flat(Infinity)
console.log(realAA)


console.log(Array.isArray("Deepak"))

console.log(Array.from("hitesh"))

console.log(Array.from({name:"Deepak"})); // Interesting

let s1= 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1,s2,s3))