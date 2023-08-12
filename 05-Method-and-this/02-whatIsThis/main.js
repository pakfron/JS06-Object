var name = 'Joe';
function makeUser() {
  return  {
    name: 'John',
    ref: this
  };
}
let user = makeUser();
console.log(user.ref.name); 
// return Joe เพราะ อยู่ในglobal object
// window เป็น Caller