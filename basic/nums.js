const score = 10000
// console.log(score);

const newscore = new Number(40000)
// console.log(newscore);
// console.log(newscore.toString());
// console.log(newscore.toFixed(2)); //after decimal 2 point of zero

const deci = new Number(4411.123)
// console.log(deci.toPrecision(5));

const locale = new Number(400000)
// console.log(locale.toLocaleString('en-IN')); //indicates indian numbering system

// console.log(Math.abs(-4));
// console.log(Math.round(4.7));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(5.6)); rounds off to lowest value
// console.log(Math.max(1,2,3,4,5));

console.log(Math.random());  //gives value in between 0-1
console.log(Math.random()*10+1); //so that we dont get value like 0.1 after 0.001
console.log(Math.floor(Math.random()*10) + 1); //to get proper value

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min+1)) + min);







