
// // let basket ={
    
// // }
// function test() {
    
//     let friut = String(prompt("ชื่อผลไม้"))
//     let amount = Number(prompt("จำนวน"))
//     do{
//         if(friut!=="")

//         {
            
//             basket[friut]=amount
//         }
//     }while(friut!=="")
// }
// test()

// console.log(basket)

const fruits ={

}

// let key = 'apple';
// let value = 10;

// let key = prompt('Enter Fruit');
// let value = +prompt('Enter Quatity');

// if(value==1){
//     fruits[key]=value;
// }else if (value>1){
//     fruits[`${key}s`]=value;
// }

// console.log(fruits);
const Terminate = 'stop'
let key;
let value

do{
    
    key = prompt('Enter Fruit');
    value = +prompt('Enter Quatity');
    if(value==1){
        fruits[key]=value;
    }else if (value>1){
        fruits[`${key}s`]=value;
    }
}while(key !== Terminate&& value!==Terminate)
    