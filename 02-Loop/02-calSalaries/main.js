let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
function isEmptyObj(object) {
    let isEmpty = true
    for(let key in object){
        isEmpty=false
    }
    return isEmpty;
}

function calSalaries(object) {
    // Validate=> แยก Service

    if(isEmptyObj(object)) return 0;
    let sum = 0;

    for(let key in object){
        // console.log(object[key]);
        sum+=object[key]
    }
    return sum;
    // Calculate
}

let total =calSalaries(salaries);
console.log (total)


