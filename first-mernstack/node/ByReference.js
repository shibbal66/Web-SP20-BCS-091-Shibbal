let x = 10;
let y = x;
y = 30;
console.log(y);
let user = { name: "Ali", email: "user@example.com" };
user.name = "usman";
let anotheruser = Object.assign({}, user); // will create deep/ Seperaate copy

anotheruser.name = "Shibbal";
console.log(user);
console.log(anotheruser);
