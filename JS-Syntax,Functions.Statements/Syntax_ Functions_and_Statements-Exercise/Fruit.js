    // 100 / 100
function fruitPrice(fruitName, quantity, price){
    let weightKg = + quantity / 1000;

    let endPrice = (price * weightKg).toFixed(2);

    console.log(`I need $${endPrice} to buy ${weightKg.toFixed(2)} kilograms ${fruitName}.`)
}

fruitPrice('apple', 1563, 2.35)