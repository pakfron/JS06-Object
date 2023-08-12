let output = 0;
const Terminate = "stop";
let key;
let sell;
let piece;
let percent;
const products = {};

do {
  const product = {};
  namess = prompt("Name");
  key = prompt("Name of Product");
  sell = prompt("จำนวนที่ขาย?");
  piece = prompt("ราคาต่อชิ้น");
  percent = prompt("สวนลดต่อชิ้น");

  if (
    key === "" ||
    key.trim() === "" ||
    key === isNaN(key) ||
    key === null ||
    key === "stop"
  ) {
    continue;
  } else {
    product["name"] = key;
  }
  if (
    sell === "" ||
    sell.trim() === "" ||
    sell === isNaN(sell) ||
    sell === null ||
    sell === "stop"
  ) {
    continue;
  } else {
    product["จำนวนที่ขาย"] = sell;
  }
  if (Number(sell)) {
    product["ราคาต่อชิ้น"] = piece;
  }
  if (Number(percent) && Number(percent) !== 0) {
    product["ส่วนลด"] = percent;
  }

  if (Number(percent) && Number(percent) !== 0) {
    output =
      output + product["จำนวนที่ขาย"]*(product["ราคาต่อชิ้น"] * ((100 - product["ส่วนลด"]) / 100));
  } else if (Number(piece)) {
    output = output + product["จำนวนที่ขาย"]*Number(product["ราคาต่อชิ้น"]);
  }

  products[namess] = product;
} while (
  namess !== Terminate ||
  key !== Terminate ||
  sell !== Terminate ||
  piece !== Terminate ||
  percent !== Terminate
);


// //Teacher
// const log = console.log;

// // - ให้เขียนโปรแกรมรับค่า 4 ค่าได้แก่ ชื่อสินค้า จำนวนที่ขาย ราคาต่อชิ้น และส่วนลดต่อชิ้นหน่วยเป็นเปอร์เซนต์  
// // - นำค่าที่รับมาไปสร้างเป็น object ที่มี key-value ตามค่าที่รับมา ถ้าส่วนลดเป็น 0 หรือไม่มีค่าไม่ต้องสร้าง key-value ที่เก็บส่วนลด  
// // - สร้างฟังก์ชันคำนวณราคาที่แท้จริงของ object (ราคาหลังหักส่วนลด)


// // SUB program-1 :Input
// let name = prompt('Enter Product Name: ');
// let quantity =  +prompt('Enter Quantity: ');
// let price =  Number(prompt('Enter Price: '));
// let discount =  prompt('Enter Discount: ') * 1;

// // SUB program-2 :CreateObjecct

// // วิธีที่1
// // const product = {
//     //     name: name, // name(variable) : 'Hermes'
//     //     quantity : quantity, // quantity : 20
//     //     price : price, // price : 500_000
//     //     discount: discount, //discount : 0.1
//     // };
    
// // วิธีที่2
// // เมื่อชื่อ key ตรงกับชื่อตัวแปรที่เก็บ value *** สามารถยุบ SYNTAX (Property Shorthand)
// const products = {
//     name,
//     quantity,
//     price,
//     discount,
// };

// log(products);


// // SUB program-3 :Calculate Price
// // วิธีที่1
// // discount 10%, paid 90%
// // discount 0.1, paid 0.9
// // price, quantity, discount => TotalPrice

// // function calcPrice (price,quantity
// //     ,discount = 0) {
// //         let totalPrice = price * quantity * (1-discount);
// //         //  100*10(1-0.1) => 1000(0.9)=> 900
// //         return totalPrice;
// // }

// // let result = calcPrice(products.price, products.quantity, products.discount);
// // log(result);

// // วิธีที่2
// // let result = calcPrice({name,quantity,price,discount,}) // products = parameter 1 ตัว = Object ทีมี่ 4 key
// function calcPrice(productsObj) {
//     let price = productsObj.price;
//     let quantity = productsObj.quantity;
//     let discount = productsObj.discount ? productsObj.discount : 0;
//     return price * quantity * ( 1 - discount );
// }
// let result = calcPrice(products)

// log(result);