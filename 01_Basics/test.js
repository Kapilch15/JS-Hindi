console.log("Interview Prepration");

const accountId = 22334;
let accountName = "Ankit Chaudhary";
var accountPassword = "542231"
accountCity = "Agra";

/*
Prefer not to use var
becoz issue in block scope & functional scope
*/

// accountId = 2345;
accountName = "Ashish";
accountCity = "Mumbai";
accountName = "1234";

console.log(accountId);
console.table([accountId, accountName, accountCity, accountPassword]);