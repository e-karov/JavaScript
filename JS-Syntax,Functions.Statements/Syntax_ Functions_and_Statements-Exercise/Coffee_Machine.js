function solve(orders) {

    let totalIncome = 0;
    let sugar;
    for (let i = 0; i < orders.length; i++) {
        const currentOrder = orders[i].split(', ');
        let coins = Number(currentOrder[0]);

        sugar = + currentOrder[currentOrder.length - 1];
        let drink;

        let price = calculateDrinksPrice(currentOrder);


        printOutput(price, coins);
    }

    console.log(`Income Report: $${totalIncome.toFixed(2)}`);

    function calculateDrinksPrice(order) {
        if (order.includes('caffeine')) {
            price = 0.80;
            drink = 'coffee';
        } else if (order.includes('decaf')) {
            price = 0.90;
            drink = 'coffee';
        } else if (order.includes('tea')) {
            price = 0.80;
            drink = 'tea';
        }

        if (order.includes('milk')) {
            price += Number((price * .1).toFixed(1));
        }

        if (sugar > 0) {
            price += 0.10;
        }

        return price;
    }

    function printOutput(price, coins) {
        if (coins >= price) {
            let change = coins - price;
            totalIncome += price;

            console.log(`You ordered ${drink}. Price: $${price.toFixed(2)} Change: $${change.toFixed(2)}`);
            
        } else if (coins < price) {
            let moneyNeeded = price - coins;

            console.log(`Not enough money for ${drink}. Need $${moneyNeeded.toFixed(2)} more`);
        }

    }
}

solve(['8.00, coffee, decaf, 4', '1.00, tea, 2']
);