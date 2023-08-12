const log = console.log;
log("Learn by Ref.");
//Copied by Value
//Copied by Refernce
//
let message = "Hello";
let word = message;

log(message);
log(word);

message = "Hi";
log(message);
log(word);
//--------------------------------

//Object
let user = {
  name: "john",
  age:33,
};
//COPID by reference
//assign Adress ของ user ให้กับ employee
let employee =user;
user.name='joe';







// let employee = user;
// log(employee);
// user.name = "Jane";
// log(user.name)
// log("----------------")
// employee.name='joe'
// log(user)
// log(employee)