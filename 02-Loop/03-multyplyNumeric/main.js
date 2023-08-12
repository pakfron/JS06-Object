let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
};

const multiplyNumeric = (object,num)=> {

for (let key in object){
    
    let value = object[key];
    if (typeof value ==='number'){
        object[key]*=num;
    }
//     else
//     {continue;}
// }
}
return object
}

multiplyNumeric(menu, 3)
console.log(menu)

