const name = 'sneha'
const repo = 8
// console.log(name + repo);  old method
// console.log(`hello i am ${name} and i have ${repo} repositories`);  //**new method

const name_first = String("sneha-2")  //string can be assign in this way as well
// console.log(name_first[3]);
// console.log(name_first.__proto__);
// console.log(name_first.length);
// console.log(name_first.toUpperCase());
// console.log(name_first.charAt(2));
// console.log(name_first.indexOf('e'));

const newname = name_first.substring(0,3)  //(start,end)
// console.log(newname);
const another = name_first.slice(-5,5)
// console.log(another);

const user = "    Login here     "
// console.log(user);
// console.log(user.trim());  //it removes extra spaces from the string

const url = "https://sneha.com/sneha&10biyala"
// console.log(url)
// console.log(url.replace('&10','@'));
// console.log(url.replace('&10',' '));
// console.log(url.includes('yahoo'));

console.log(name_first.split('-'));  //splits on basis of dash





