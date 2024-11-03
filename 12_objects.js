// const tinderuser = new object()


const tinderuser = {}
tinderuser.id = "12345"
tinderuser.name = "Deepak"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

const regular = {
    email : "email@gmail.com",
    fullname :{ 
        firstname : "Hey",
    secondname: "Hi"}

}
// console.log(regular.fullname.firstname);


const obj1 = { 1: "A", 2: "B"}
const obj2 = {3: "C",4:"d"}

// const obj3 = Object.assign(obj1,obj2) 
// const obj3 = Object.assign({},obj1,obj2) // preferred one from these two

const obj3 = {...obj1,...obj2} // Latest on e

// console.log(obj3); 


// console.log(tinderuser);

// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty("isLoggedIn"));



// ********** De-Structure ************//

const course = {
    coursename :'Javascript',
    price : "999",
    mentor : "Deepak"
}

 const {mentor} = course

 console.log(mentor);

 const {mentor : m} = course
 console.log(m);
 
 
 /*      API  JSON         */
  