// console.log("lern object");
// //DataTypes
// //-Primitive : Boolean,Number,String etc ....
// //-Non-Primitive : Object

// //##Object Declaration
// //{} == stand for object / scope
// //{record_1,record_2,record_3,...}
// //each record => <key>:<value>
// //<value> any Datatype
// //<key_name> Datatype:string
// //record === property (คุณสมบัติ,สิ่งที่มี)== key-value pair

// let user = {
//   firstName: "prayut",
//   lastName: "Chan-o-Cha",
//   nickName: "Tu",
//   isAdmin: true,
//   age: 99,
//   "like human": false,
// };

// //##Acess,Modifiy,Delete

// //Every action Need Key!!

// //every action neeed <key_name>!!
// //not Notation(notation=สัญลักษณ์) <obj>.<keyname>===<value>
// //ข้อจำกัด : เข้าถึง key ที่มี space ไม่ได้
// //ถ้าไม่มี record => return indefined
// //get,poll,read

// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user.nickName);
// console.log(user.isAdmin);
// console.log(user.age);
// console.log(user.salary);
// // console.log(user["like human"])

// //MODIFY,UPDATE
// //Syntax: <obj>.<key_name>=newValue
// user.firstName = "Pravit";
// user.age = 27;
// user.age++;
// console.log(user.age);

// //ADD
// //Syntax: <obj>.<new_key>=newValue
// user.address = "bangkok";
// // console.log(user)

// //DElETE
// //Syntax : delete<obj>.<key_name>

// delete user.isAdmin;
// console.log(user);

// //NESTED Object

// const employee = {
//   fullName: "John Doe",
//   salary: 500_000,
//   address: {
//     district: "Phaya Thai",
//     province: "bangkok",
//     country: "Thailand",
//   },
// };
// //access , Modify, Delete
// console.log(employee.address.province);
// console.log(employee.address.district);
// console.log(employee.address.village);
// employee.address.province = "Nonthaburion";
// delete employee.address.country;
// //Prevent Crash!!
// //dot ใช้กับ object เท่านั้น
// //ห้ามมมมมมมมมมมมมมใช้กับ undefined<undefined>.<key>
// //วิธีแก้ optional chaining => <underfined>?.<key>
// // console.log(employee.addr.province)//undefined.provice

// console.log(employee.address?.village);

// //4. check key

// const product = {
//   id: 227,
//   name: "Iphone",
//   price: 50_000,
//   //discount:50,
//   "is mobile": true,
// };

// console.log(product.discount);

// //In operator
// //Syntax : <key_name_string> in <obj>
// //'name' in product // => true,false

// console.log("name" in product);
// console.log("discount" in product);
// // method hasOwnProperty
// //syntax : <obj>.hasOwnPropery(<key_name>)=>BOOL
// console.log(product.hasOwnProperty("name"));
// console.log(product.hasOwnProperty("discount"));

// //Syntax :<obj>['<key_name_string>']
// // ***1 ใช้ bracket เมื่อไหร่ ชื่อ key ข้างในต้องเป็น string
// // ***2 ถ้าไม่ใช่ string ต้องเป็นตัวแปรที่เก็บ string computed key
// // Access Key-value ผ่านชื่อตัวแปรได้
// //bracket Notation []
// console.log(product.id);
// //console.log(product.is mobile) crash
// console.log(product["is mobile"]);

// product["name"] = "i-iphone-15";

// console.log(product);

// let aaaaa = "name";

// console.log(product[aaaaa]);
// console.log(product.aaaaa); //product.aaaaa === product['aaaaa]===undefined
// console.log(product[aaaaa]);

//ทบทวน

const user = {
  name: "John",
  age: 33,
  isMarried: false,
  address: {
    village: "Ladda Land",
    province: "Chiang Mai",
  },
};

// get data
log(user.name);
log(user["name"]);

let a = "name";
log(user);
log(user[a]);

delete user.isMarried;
log(user);
delete user["age"];
log(user);

let b = "adress";
delete user[b];
log(user);
//update

let x = 5;
x = x + 2;
// container = value +5
user.age = user.age +1;
//container =  value +1

log(user['age'])
