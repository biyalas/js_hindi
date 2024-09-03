const arr = ["name","age","year"]
// console.log(arr[2]);

//array methods

// arr.push("month")
// arr.pop()  //removes last element
// arr.unshift(0) //adds in start of arrays
// arr.shift() //removes the element added in unshift operation or if not performed any unshift operation then removes first element
// console.log(arr);

// console.log(arr.includes(2));
// console.log(arr.indexOf(2)); //gives negative value because this method does not support array

// const newarr = arr.join() //converts array to string
// console.log(arr);
// console.log(newarr);


const num = [0,1,2,3,4,5]
// console.log("A ", num);

const newNum = num.slice(0,4) //includes starting index and excludes ending index and doesn't changes original array
// console.log(newNum);
// console.log("sliced array :", num);

const newNum2 = num.splice(0,4) //includes both starting and ending inex and changes original array
// console.log(newNum2);
// console.log("Spliced array: ", num);


const sweets = ["cake","pastry","donut"]
const mithai = ["rasmalai","rabdi","gulabJamun"]
// mithai.push(sweets)  //push adds array in the given array as one element 
// console.log(mithai);

const all = mithai.concat(sweets)  //creates new array
// console.log(all);
// const all = [...mithai, ...sweets] //spread is better way to combine two or more arrays
// console.log(all);


const sub = [1,2,3,[4,5,6],7,8,[9,10,[11,12,13]]]
const another = sub.flat(Infinity)
// console.log(another);

// console.log(Array.isArray("Sneha Biyala")); //checks if array or not
// console.log(Array.from("Sneha Biyala")); //converts each alpha into array

let score1 = 100
let score2 = 200
console.log(Array.of(score1,score2)); //designs an array of existing values
