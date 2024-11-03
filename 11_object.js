 // Singleton  



 // object literals  
const mysym = Symbol('key1')
 const Jsuser = {
    name: 'Deepak',
    age:17,
    location:"Kanpur",
    email:"deepak@yahoo.com",
    [mysym]: "key1",
    "City":"Kanpur"
 }

//  console.log(Jsuser.age); // Not a good habit
// console.log(Jsuser["email"]);
// // console.log(Jsuser.city);   // NOt applicable
// console.log(Jsuser["City"]);
// console.log(typeof Jsuser.mysym);

Jsuser.email = "hey@google"
Jsuser.age = 20
 
// Object.freeze(Jsuser)
Jsuser.city = "mandhana"
// console.log(Jsuser);


Jsuser.greeting = function(){
    console.log("Hey i am here");
}
console.log(Jsuser.greeting )
console.log(Jsuser.greeting());



Jsuser.g2 = function(){
    console.log(`Hello i am here , ${this.name}`);

}

console.log(Jsuser.g2())