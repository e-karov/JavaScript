class Kitchen{

    menu = {};
    productsInStock = {};
    actionsHistory = [];

    constructor(budget){
        this.budget = budget;
    }

    loadProducts (input){

        let parsedData = input.map(d => d.split(' ')) 
        .map(([product, quantity, price]) => ({
            productName: product, productQuantity: +quantity, productPrice: +price
        }));

       parsedData.forEach(p => {
           if (p.productPrice <= this.budget) {
               this.budget -= (p.productPrice);
               
            if (! this.productsInStock[p.productName]) {
                this.productsInStock[p.productName] = {productQuantity: 0};
            }
            this.productsInStock[p.productName] = {
                productQuantity: this.productsInStock[p.productName].productQuantity + Number(p.productQuantity)
            }
            
            this.actionsHistory.push(`Successfully loaded ${p.productQuantity} ${p.productName}`); 

            } else {
            this.actionsHistory.push(`There was not enough money to load ${p.productQuantity} ${p.productName}`);
            }
        });
        return this.actionsHistory.join("\n");
    }

    addToMenu(meal, neededProductsArr, price){

        if ( !this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = {
               neededProducts: neededProductsArr,
               price: Number(price)
            };

            return (`Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`);

        } else {
            return `The ${meal} is already in our menu, try something different.`;
        }
    }

    showTheMenu(){
        
        if (Object.keys(this.menu).length > 0) {
            let output = [];
            for (const key in this.menu) {
                output.push(`${key} - $ ${this.menu[key].price}`)
            }
            return output.join("\n") + "\n";
        } else {
            return "Our menu is not ready yet, please come later..."
        }
    }

    makeTheOrder(meal){

        if (! this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        } 
        
        for (let product of this.menu[meal].neededProducts) {

            let [productName, quantity] = product.split(" ");

            if ( !this.productsInStock.hasOwnProperty(productName) 
                || this.productsInStock[productName] < Number(quantity)) {

                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            } 

            for (let product of this.menu[meal].neededProducts) {
                let [productName, quantity] = product.split(" ");

                    this.productsInStock[productName] -= Number(quantity);
            }
        }
            this.budget += Number(this.menu[meal].price);
            
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
    }
}

let kitchen = new Kitchen (1000);
        
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu())
console.log(kitchen.makeTheOrder('frozenYogurt'));
