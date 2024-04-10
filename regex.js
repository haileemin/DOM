// validate email

let emailPattern = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
let email_1 = "a@gmail.com";
let email_2 = "ab@yahoo.com";
let email_3 = "abc@hotmail.com";

let email_4 = "@gmail.com";
let email_5 = "ab@gmail.";
let email_6 = "@#abc@gmail.com";

console.log(emailPattern.test(email_1));
console.log(emailPattern.test(email_2));
console.log(emailPattern.test(email_3));
console.log(emailPattern.test(email_4));
console.log(emailPattern.test(email_5));
console.log(emailPattern.test(email_6));