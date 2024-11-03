function myname() {
    console.log("D")
    console.log("E")
    console.log("E")
    console.log("P")
    console.log("A")
    console.log("K")
}

// myname()

// function addnum (n1,n2){
//     console.log(n1 + n2);

// }


addnum(7, 9)

addnum(9, "a")

addnum(9, null)

const result = addnum(9, 5)
console.log(result);


function addnum(n1, n2) {
    // let result = n1 + n2 
    // return result
    return n1 + n2
}

addnum(7, 9)

// const result = addnum(9,5)
// console.log(result);

function loginuser(username) {
    // if (username === undefined) {
    //     console.log("Please a enter a username")
    //     return
    // }

    if (!username) {
        console.log("Please a enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginuser("Deepak"))
console.log(loginuser())

 