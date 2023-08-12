const log = console.log;
log("Method and this keyword");

// //#############################
// //########### Intro Method
// //############################
// //object === Collection of properties and method
// //each record => called property
// //each property => <key>:<value>

// //some recor => <key>:<FN>
// //call method

// // const programmer = {
// //     name:'Pavit',
// //     age:30,
// //     dev:devWebsite,
// //     meet:meeting,
// //     sleep
// // }

// // function devWebsite (){
// //     console.log("I'm working");
// // }

// // function meeting(){
// //     console.log("I'm meeting")
// // }

// // function sleep(){
// //     console.log("I'm sleeping")
// // }

// // ความสามารถของ Object
// // property
// // Syntax<obj>.<key>
// // log(programmer.name)
// // log(programmer.age)
// // // programmer.dev// devWebsite
// // programmer.dev()
// // programmer.meet()

// //#################################
// //############2. Alternative Syntax
// //#################################

// const programmer = {
//   name: "John",
//   age: 30,
//   dev: function () {
//     console.log("I'm working");
//   },
//   meet: () => console.log("I'm meeting"),
//   //method shorthand
//   sleep() {
//     console.log("I'm sleeping");
//   },
//   // sleep:()=>console.log("I'm sleeping")
// };

// programmer.dev();
// programmer.meet();
// programmer.sleep();

// //mini=lab
// // สร้าง object ของตัวเอง
// // ระบุคุณสมบัติตัวเองสัก 2-3 ข้อ
// //ระบุความสามารถของตัวเองสัก 4 อย่าง (cover ทุก syntax)
// // key: nameFunction
// // key : anonymous FN
// // key : arrowFN
// // key : shortHand

// function playSport(type) {
//   console.log(`I'm playing ${type}`);
// }
// const me = {
//   name: "Pakphum",
//   hair: "Black",
//   eye: "Brown",
//   gender: "Male",
//   myEx: ["John", "Jane"],
//   sport: playSport,
//   sleepAllDay: function () {
//     console.log(`I'm Dead`);
//   },
//   eatAllNight: (menu) => console.log(`I'm eating ${menu} all the time`),
//   focus(task) {
//     console.log(`I'm working on ${task} in Focus mode`);
//   },
//   //focus :() => {...logic...}
//   //focus :function focus () {...logic...}
// };

// // me.football('basketball');
// // me.sleepAllDay();
// me.eatAllNight(`TAX`);
// // me.focus('javascript lab');

// //OOP : Object Oriented Program

// const car = {
//   brand: "Tesla",
//   model: "x",
//   drive: () => console.log("Driving"),
//   'auto pilot': () => console.log("self Driveing"),
// };

// log(car.brand,car.model)

// car.drive()
// car['auto pilot']()

// const calculator ={
//     sum:(x,y) => x+y,
//     minus:(x,y) => x-y,
// };

// let r1 = calculator.sum(5,7)
// let r2 =calculator.minus(7,3)
// log(r1,r2)

//4. This Keyword

//JS Keyword: if,else,for,while,do,switch,this
//Question : ทำย่างไร method จะสามารถเข้าถึง property ของตัวเองได้

const user = {
  name: "codecamp",
  age: 15,
  sayHi: function () {
    console.log(`Hello ${this.name}`); //this==user.this.age==user.age
  },
  growOld: function () {
    this.age++;
  },
};

// user.sayHi()
// user.name='software park'
// user.sayHi()

log(user.age);
user.growOld();
log(user.age);
//q ค่าของ this ถูก solve ตั้งแต่ตอนที่เขียน function รึเปล่า?
//a ไม่
function dev() {
  console.log(`This feature developed by ${this.name}`);
}

const programmer1 = {
  name: "john",
  develop: dev,
};

const programmer2 = {
  name: "Jane",
  develop: dev,
};
//a : this ถูก solve ตอนเรียกใช้ Method
//Caller.method => Caller == Object before the dot
// checkpint-1: this ==object ที่เรียใช้ method

programmer1.develop();
programmer2.develop();
