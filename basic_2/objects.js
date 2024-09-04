
                                               //objects literals
const user = {
    name : "sneha",
    "last name": "sneha biyala",
    age: 20,
    location: "mumbai",
    mail: "biyalasneha@gmail.com",
    lastLoggin: ["sunday"]
}
// console.log(user.name);
// console.log(user["last name"]);

user.age = 21  //change the value
// console.log(user);
// Object.freeze(user) //freezes the object to avoid changes in it


// user.greet = function(){               //function can also be added in a object
//     console.log("hello user !");
// }
// console.log(user.greet());

// user.greetName = function(){
//     console.log(`Hello,${this.name}`);
// }
// console.log(user.greetName());

                                           //singleton object

const tinderuser = new Object()
tinderuser.id = "13578"
tinderuser.logIn = false
// console.log(tinderuser);

const nest = {
    email: "xyz@yahoo.com",
    Name:{
        firstname: "sneha",
        lastname: "Biyala"
    }
}
// console.log(nest);
// console.log(nest.Name);
// console.log(nest.Name.firstname);

// const obj1 = {1:"a", 2:"b"}
// const obj2 = {3:"c", 4:"d"}
// const obj3 = Object.assign({},obj1,obj2)  //joining of 2 objects where {} is target and other are sources
// // console.log(obj3);
// const obj4 = {...obj1, ...obj2}
// console.log(obj4);


// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(tinderuser.hasOwnProperty('logIn'));  //tells wheteher property is present or not






