"use strict"; //treat js as new version //
//alert("Hello!") not working in nodejs//

let name = "sneha"
let age= 20
let isLogIn = false

/* bigint, string, boolean, number(range), null(standalone value), undefined(unasssigned value), symbol(unique) */

// console.log(typeof null);  //shows type of data value//

//non primitive datatype or refrence datatype
let marvel = ["thor","iornman","captain_america"]; //array
let obj = {                //object
    me : "sneha",
    age : 20,
}
 //function
const myFunction = function(){
    console.log("Hello world");
}


//stack(primitive),heap(non-primitive)
//stack gives copies of original value
let myGit = "biyalas"
let anotherName = myGit
anotherName = "javascript"
// console.log(anotherName);
// console.log(myGit);

//heap stores value as reference to the original value
let userOne = {
    mail: "user@gmail.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.mail = "snehabiyala@gmail.com" 
console.log(userTwo);



