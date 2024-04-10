let accountPattern = /^[_a-z0-9]{6,}$/;
let account_1 = "123abc_";
let account_2 = "_abc123";
let account_3 = "______";
let account_4 = "123456";
let account_5 = "abcdefg";

console.log(accountPattern.test(account_1));
console.log(accountPattern.test(account_2));
console.log(accountPattern.test(account_3));
console.log(accountPattern.test(account_4));
console.log(accountPattern.test(account_5));
