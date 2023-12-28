function storeProvision(supply, order) {
        storeSupply={}


    for (let i = 0; i < supply.length; i+=2) {
         product = supply[i] ; 
        qty = Number(supply[i+1])
           
        storeSupply[product] = qty;
          

    }
    for (let i = 0; i < order.length; i+=2 ){
        toCheck=order[i]
        qty = Number(order[i+1])

        if (toCheck in storeSupply) {  storeSupply[toCheck]+=qty
            
        }else ( storeSupply[toCheck] = qty)




        
        
    }
            
let final = Object.entries(storeSupply)
for ( key of final){
    console.log(key[0],"->",key[1]);



}





}
    
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])