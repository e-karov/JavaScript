    // 100 / 100
class Stringer{
  
    constructor(str, length){
        this.innerString = str;
        this.innerLength = length
    }
   
    increase(length){
      
        this.innerLength += length;
    }

    decrease(length){
      this.innerLength = this.innerLength - length > 0? this.innerLength - length : 0;
    }

    toString(){

        return this.innerString.slice(0, this.innerLength) 
             + (this.innerString.length > this.innerLength ? "..." : "")
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test