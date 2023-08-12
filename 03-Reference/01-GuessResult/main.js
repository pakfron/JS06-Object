บรรทัดที่มี * , ** , *** ให้ผลลัพธ์เป็นอะไร เพราะอะไร



const product1 = { name: 'Coke', price: 18, size: '500mL' };

const product2 = product1;
product2.name = 'Pepsi';
product2.price = 19;

console.log(product1); // *ผลลัพท์เป็น obj product1 
console.log(product2); // **ผลลัพท์เป็น obj product1 เพราะไปกำหนดหว่าproduct2=product1
console.log(product1 === product2); // ***ทรู เพราะ ที่เก็บobjถือว่าเอามาจากadressเดียวกัน
