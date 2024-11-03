const  arr = [1,2,3,4,5,6]

for (const num of arr) {
    // console.log(num);
    
}

const greeting = "Hello world";
for (const greet  of greeting) {
    // console.log(greet);
       
}

// Maps

const map = new Map()
map.set("A","America")
map.set("IN","India")
map.set("U","USA")
map.set("Fr","France")
map.set("M","Monaco")

// console.log(map);

for (const key of map) {
    // console.log(key);
    
}

for (const [key, value] of map) {
    // console.log(key,":-" , value);
    
}

const mobb = {
    hey: "hello",
    Deepak: "katiyar"

}


// for (const element of mobb) {
    //     console.log(element);
    
    // }   
    
for (const key in mobb) {
    // console.log(key); 
    // console.log(`${key} is for ${mobb[key]}`);
     
}
const prog = ["js" , "c" , "c++"]

for (const key in prog) {
//   console.log(key);
  
}

for (const key in prog) {
//    console.log(prog[key]);
   
}

const coding = ["js" , "c" , "c++" , "java" , " python"]

// coding.forEach( function (a){
//     console.log(a);
    
// })

// Using Arrow Functions

coding.forEach( (a) => {
    // console.log(a);
    
})


function printme(a){
    // console.log(a);
    
}

coding.forEach(printme)

const mycoding =[ 
    {
        lname: "hey",
        lwork: "yah"
    },
    {
        lname: "hello",
        lwork: "yeah"
    },
    {
        lname: "hi",
        lwork: "yours"
    }
    ,
]

mycoding.forEach( (a) =>{
    console.log(a.lwork);
    
})