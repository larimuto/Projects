function green(input){
    let totalArea=input[0];
    let finalPriceDis=totalArea * 7.61 * 0.18;
    let totalPrice=totalArea * 7.61 - finalPriceDis;
    console.log(`The final price is: ${totalPrice} lv.`); 
    console.log(`The discount is: ${finalPriceDis} lv.`);

}
green([550]);