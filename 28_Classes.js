
// class user{
//     constructor(username , email , password){
//         this.username = username,
//         this.email = email,
//         this.password = password

//     }

//     encryptPassword(){
//         return `${this.password}absgfkjen`
//     }
//     changeUsernme(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const chai = new user('Chai',"chaihfaj@gmail.com", "fnimwe9jg02")
// console.log(chai.encryptPassword());
// console.log(chai.changeUsernme());
 
// behind the scene

function User(username , email , password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abcdfeo`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@gmail.com", "139uu52")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());

