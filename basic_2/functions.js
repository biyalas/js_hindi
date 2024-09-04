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

console.log(loginUserMsg("biyalas"));
