function my(){
    console.log("hello javascript here !");
}
// my()

function add(num1,num2){  //num1 and num2 are parameters
    console.log(num1+num2);
}
// add(2,8)  //these values are arguments

function sub(num1,num2){  //num1 and num2 are parameters
    // let result = num1 - num2;
    // return result
    return num1 - num2
}
// const result = sub(20,8)  //these values are arguments
// console.log("subtraction of 2 numbers is: ",result);

function loginUserMsg(username){
    return `${username} just logged in !!`
}
// console.log(loginUserMsg("biyalas"));


//use of rest operator
function myCart(...num1){   //if only one input is given then by using rest operator we can add more items.
    return num1;
}
// console.log(myCart(200,350,550));


//using objects
const user ={
    name: "biyalas",
    items: 15
}
function usingObject(any){          //function name can be anything
    console.log(`username is ${any.name} and have purchased ${any.items} items`);
}
// usingObject(user)



//using array structure
const newArr = [300,600,450,670]
function returnSecondValue(getArr){
    return getArr[1]
}
// console.log(returnSecondValue(newArr));



//SCOPES =>
var c = 100                //values return outside is global scope and can be used inside of a block statement
if(true){
    let a = 10             //values return inside block is call local scope or block scope
    const b = 20           //cannot be used outside the block
    var c = 30
}
// console.log(a);
// console.log(b);
// console.log(c);


let a = 200;
if(true){
    let a = 30
    const b = 40
    // console.log("Inner value: ", a);
}
// console.log(a);


//FUNCTION INTO A FUNCTION PROPERTIES
//CHILD FUNCTION CAN ACCESS PARENT VARIABLES BUT NOT VICE-VERSA
function one(){
    const username = "biyalas"

    function two(){
        const web = "VS"
        console.log(username);
    }
    two()
}
// one()    

