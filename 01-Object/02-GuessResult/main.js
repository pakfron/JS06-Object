// บรรทัดที่มี * และ ** ให้ผลลัพธ์เป็นอะไร เพราะอะไร

// ```js
const user = {
  email: 'cc@gmail.com',
  isActive: true
};

user.isActive = false;
console.log(user); // *
user = {};
console.log(user); // **

// ```
// console.log(user); // * แสดงkeyและvalue ของobject user
// console.log(user); // * ไม่สามารถ กดหนดตัวแปรได้อีกรอบเพราะ userครั้งแรกกำหนดเป็นconst