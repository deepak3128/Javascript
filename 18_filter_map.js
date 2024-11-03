// const myNum = [1,2,3,4,5,6,7,8,9];

// const newNum = myNum.filter( (a) => a>4)
// console.log(newNum);

// const newNum = myNum.filter( (a) => {
//     a>4
// })
// console.log(newNum);

// const newNum = myNum.filter( (a) => {a>4})
// console.log(newNum);

// const newNum = myNum.filter( (a) => {
//      return a>4
// })
// console.log(newNum);

// const newNums = []

// myNum.forEach( (a)=>{
//     if(a>4){
//         newNums.push(a)
//     }
// })

// console.log(newNums)


// ************************* Map *********************/

const myNum = [1,2,3,4,5,6,7,8,9];

// const one = myNum.map( (a)=> a + 10)
// console.log(one);

const one = myNum
.map( (a) => a * 10)
.map( (a) => a+1)
.filter((a) => a>=40)

// console.log(one);

/* ************************** Reduce ************** */  


const number = [1,2,3,4,5,6,7,8,9];

let total = number.reduce(function (acc,curval){
    console.log(`Acc : ${acc} and curval ${curval}`)
    return acc + curval
} , 0)

console.log(total);


total = number.reduce( (acc,curval)=> (acc+curval))

console.log(total);


const course = [
    {
        course : "Python",
        price: 999
    },
    {
        course : "JavaScript",
        price: 1999
    },
    {
        course : "CPP",
        price: 2999
    },
]

const Total = course.reduce((acc,item)=>(acc + item.price),0)
console.log(Total);
