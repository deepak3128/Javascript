// const { set } = require("mongoose");

// class User {
//     constructor(email , password) {
//     this.email = email;
//     this.password = password;
//     }

//     get password (){
//         return this._password.toUpperCase();
//     }

//     set password(val){
//         this._password = val.toUpperCase()
//     }
// }

// const deepak = new User("hey@gmail.com", "12345tfgbnkhsf")
// console.log(deepak);


/*                         OLD METHOD                                          */


// const Hey = new User('chai@gmail.com', "poiuyuianfofn")
// console.log(Hey.password);



/*                        USING OBJECT METHOD                     */


const User = {
    _email : "email",
    _password : "password",

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value.toUpperCase();

    }
}

const hey1 = Object.create(User)
console.log(hey1.email);
