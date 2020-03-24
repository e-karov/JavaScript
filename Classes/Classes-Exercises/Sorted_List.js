    // 100 / 100
class List{
    
    constructor() {
        this.list = [];
        this.list.sort((a, b) => a-b);
        this.size = this.list.length; 
    }
   
    add(num){
        this.list.push(num);
        this.list.sort((a, b) => a-b);
        this.size++;
    }

    remove(index){
        if (index >= this.list.length || index < 0) {
            throw new Error("Index is outside the bounds of the list");
        } else {
            this.list.splice(index, 1);
        }
        this.size--;
    }

    get (index){

        if (index >= this.list.length || index < 0) {
            throw new Error("Index is outside the bounds of the list");
            
        }
        return this.list[index];
    }
}
 


let list = new List();
list.add(5);
list.add(6);
list.add(7);
list.add(40);
list.add(23);
list.add(2);
console.log(list.get(1)); 
list.remove(1);
list.remove(4);
list.remove(1);
console.log(list.get(2));
console.log(list.size)
console.log(list)
console.log(list.hasOwnProperty('size'))
