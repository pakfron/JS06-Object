

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

// let calculator = {
    
//     read(){
//         this.x= +prompt(`Enter Num1`)
//         this.y= +prompt(`Enter Num2`)
//     },
//     sum() {
//         return this.x+this.y
//     },
//     mul(){
//         return this.x*this.y
//     }
// }


// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());



function Calculator(){
    
    this.read=function () {
        this.x= +prompt(`Enter Num1`)
        this.y= +prompt(`Enter Num2`)
    },
    this.sum=function () {
        return this.x+this.y
    },
    this.mul=function(){
        return this.x*this.y
    }
    // this.outputread=this.read(),
    // this.outputsum=this.sum(),
    // this.outputmul=this.mul()
}

const ABC = new Calculator()

ABC.read()
ABC.sum()
ABC.mul()

