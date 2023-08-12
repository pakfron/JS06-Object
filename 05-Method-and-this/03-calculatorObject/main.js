

// const calculator = {
//     read:
//     function() {
        
//         let a
//         a = Number(prompt('Number1'))
//         let b 
//         b= Number(prompt(`Number2`))
    
//         calculator['Number1']=a
//          calculator['Number2']=b
//      }
//     ,
//     sum:function (){
//         return this.Number1+this.Number2
//     },

//     mul:function (){
//         return this.Number1*this.Number2
//     },

// }



// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

let calculator = {
    
    read(){
        this.x= +prompt(`Enter Num1`)
        this.y= +prompt(`Enter Num2`)
    },
    sum() {
        return this.x+this.y
    },
    mul(){
        return this.x*this.y
    }
}


calculator.read();
alert(calculator.sum());
alert(calculator.mul());