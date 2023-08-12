

    
 function   Accumulators(startingValue) {
    this.currentValue=startingValue
        this.read=function read(){
            this.input1=Number(prompt())
           this.currentValue+=this.input1
            
        },
       
        this.show =function show(){
            alert(this.currentValue) 
        }
    }

    const test = new Accumulators(50)

    console.log(test.read())
    console.log(test.show())
