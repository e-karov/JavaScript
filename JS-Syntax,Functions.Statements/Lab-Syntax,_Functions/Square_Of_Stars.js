function solve(num = 5){

    for (let row = 0; row < num; row++) {
       
        let row = '';
        for (let col = 0; col < num; col++) {
           row += "* ";    
        }
        
        console.log(row)
    }
}

solve();