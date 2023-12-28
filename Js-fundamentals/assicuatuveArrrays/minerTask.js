function minerStock(array) {
    stock = {}

  for (let i = 0; i < array.length; i+=2) {
    
    if(array[i] in stock){ stock[array[i]]+=Number(array[i+1])}else{stock[array[i]]=Number(array[i+1])}  // chek if X  is in the object   if happy it adds to value .  if not it creates key and value
   
  }

Object.entries(stock).forEach(x => { console.log(x[0], "->", x[1]);                      // prints
    
});



}
minerStock([
    'gold',
    '155',
    'gold',
    '15'
    ]
    )