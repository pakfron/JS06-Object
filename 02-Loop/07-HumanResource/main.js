const employees = {
    john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
    peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
    mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
    sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
};



let input

output = {}

input = prompt()
employ = String(input)

if (employees.hasOwnProperty(input)) {
    // alert(employees[input])

    // output['Name'] = input
    // output['Salary'] = employees[input].salary
    // output['address'] = employees[input].address.district + ', ' + employees[input].address.province

    const obj = employees[input]
    console.log(`Name: ${input} salary:${obj.salary} address: ${obj.address?.district}, ${obj.address?.province}`)
}
else {
    alert("not found")
}

// function FindEM(obj) {
 
//     let input

//     output = {}
    
//     input = prompt()
//     employ = String(input)
//     if(obj[key]===obj[input]){
//         for(let key in obj){ 
//                 output['Name'] = input
//                 output['Salary'] = obj[input].salary
//                 output['address'] = obj[input].address.district + ', ' + obj[input].address.province
//         }
//     }else{

//         alert("not found")
//     }
//     console.log(output)
// }

// FindEM(employees)
