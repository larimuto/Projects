function solve() {
    return function (argument) {
            return argument
                };
  }
  
  let manager = solve();
  console.log(manager("restock flavour 50")); // Success
  console.log(manager("prepare lemonade 4"));




        
for (const element in recepie[currentProduct]) {
  
    // check if  all ingr are  in stock for the current  recepie
    if(recepie[currentProduct][element] * currentQty > stock[element]){
        return `Error: not enough ${element } in stock`
    }
    


}

// removes the  recepies quantities from stock
stock.protein -= (recepie[currentProduct].protein || 0 ) * currentQty ;
    stock.carbohydrate -= (recepie[currentProduct].carbohydrate || 0) * currentQty ;
    stock.fat -= (recepie[currentProduct].fat || 0* currentQty) ;
    stock.flavour -= (recepie[currentProduct].flavour || 0 ) *  currentQty ;