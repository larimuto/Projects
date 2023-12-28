function fruits(...array) {
    let fruit = array.shift()
    let amount = array.shift() / 1000
    let money = array.shift()
   
    console.log(`I need $${(money*amount).toFixed(2)} to buy ${amount.toFixed(2)} kilograms ${fruit}.`);
    
}
fruits('orange', 2500, 1.80 )
fruits('apple', 1563, 2.35 )