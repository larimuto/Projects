function solution() {
    


const recepie = {
    'apple' :  {'carbohydrate' : 1 ,  'flavour' : 2 },
'lemonade' :   { 'carbohydrate': 10 , 'flavour' : 20 },
'burger' :  { 'carbohydrate' : 5 ,  'fat' : 7 ,  'flavour' : 3},
'eggs' :  {  'protein': 5 ,  'fat' : 1  , 'flavour' : 1},
'turkey' :  { 'protein' : 10, 'carbohydrate' : 10, 'fat' :  10, 'flavour': 10}
}

let  stock = {

    'protein' : 0,
     'carbohydrate' : 0, 
     'fat' : 0,
     'flavour' : 0


}




    return  function orders(argument){
       
let currentComand = argument.split(" ")[0];
let currentProduct = argument.split(" ")[1];
let currentQty = Number(argument.split(" ")[2]);


switch (currentComand) {
    case 'restock':
         stock[currentProduct] += currentQty
  
        return "Success"
        
    case 'prepare':
        
for (const element in recepie[currentProduct]) {
  
    // check if  all ingr are  in stock for the current  recepie
    if(recepie[currentProduct][element] * currentQty > stock[element]){
        return `Error: not enough ${element } in stock`
    }
    


}

// removes the  recepies quantities from stock
stock.protein -= (recepie[currentProduct].protein || 0 ) * currentQty ;
    stock.carbohydrate -= (recepie[currentProduct].carbohydrate || 0) * currentQty ;
    stock.fat -= (recepie[currentProduct].fat || 0) *  currentQty ;
    stock.flavour -= (recepie[currentProduct].flavour || 0 ) *  currentQty ;
            
    return "Success"
    case 'report':
        return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`
        
    
 
  }


}



}



let manager = solution();
console.log (manager ('prepare turkey 1'))//, 'Error: not enough protein in stock'
// console.log (manager ('restock protein 10'))//, 'Success'
// console.log (manager ('prepare turkey 1'))//, 'Error: not enough carbohydrate in stock'
// console.log (manager ('restock carbohydrate 10'))//, 'Success'
// console.log (manager ('prepare turkey 1'))//, 'Error: not enough fat in stock'
// console.log (manager ('restock fat 10'))//, 'Success'
// console.log (manager ('prepare turkey 1'))//, 'Error: not enough flavour in stock'
// console.log (manager  ('restock flavour 10'))//, 'Success'
// console.log (manager ('prepare turkey 1'))//, 'Success'

// console.log (manager  ('report'))//, 'protein=0 carbohydrate=0 fat=0 flavour=0


// console.log (manager  ('restock flavour -200 '))
// console.log (manager  ('report flavour -102'))




