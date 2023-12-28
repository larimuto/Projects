function income(array) {
    let income = 0;

    let regExp = /%(?<name>[A-Z][a-z]+)%[^.|$%]*<(?<product>\w+)>[^.|$%]*\|(?<count>\d+)\|[^.|$%0-9]*(?<price>\d+\.?\d*)\$/            // filter the needed info   Dont use /g or it wont work
  
    let command =  array.shift()                                            //setup while cycle 
    
    while( command != 'end of shift'){

       let  match = command.match(regExp)
        
        if(match){                                                                                  // if tgere are matchs to the regExp
            let {name, product, count, price} = match.groups                                            // deconstruct the grups
            

                 let totalPrice = Number(count) * Number(price)                                             //  calculate the  total price  per person and  sent it to the Income  after
                 income += totalPrice

            console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);                                          //  print  name  prduct  incomeFromName



        }


       

        command = array.shift()                                                                             // always have +1 on your mind
    }
    
   
 console.log(`Total income: ${income.toFixed(2)}`);                                                                     // total money

 
}
income(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift'])
// income(['%InvalidName%<Croissant>|2|10.3$',
// '%Peter%<Gum>1.3$',
// '%Maria%<Cola>|1|2.4',
// '%Valid%<Valid>valid|10|valid20$',
// 'end of shift']
// )