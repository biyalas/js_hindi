const accountId = 14567  //cannot be changed//
let accountEnail = "sneha@gmail.com"
var accountPass = "12345"
accountCity = "mumbai"
let accountState

/* 
prefer not to use var because issue in block scope and functional scope
*/

accountEnail = "sb@gmail.com"
accountPass = "1111"
accountCity = " delhi"

console.table([accountEnail, accountPass, accountCity, accountState])
