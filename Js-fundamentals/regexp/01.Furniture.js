function furniture(array) {
items = [];                                                                                 //set up list and   earnings    
totalMoney = 0
   

    regExMatch = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>[0-9]+\.?[0-9]+)!(?<qty>\d+)/             // make a regex to fillter   the request

 let finish = array.shift()                                                                      //  setup a while cycle 

    while (finish !='Purchase') {
       let  match = finish.match(regExMatch)
        

        if (match) {                                                                    // filter out Null

          let {name, price, qty} = match.groups;                                                // take out  the grups and do   the  price calculation

          totalMoney += qty * price ;
          items.push(name)
         
        }
            
        finish = array.shift()                                                  // forget not  to  have 1 on you mind  always
      
    }


if(items.length > 0){                                                                           // check for 0  items Happy path has Sad Has not
    console.log("Bought furniture:")
    items.forEach(x => {console.log(x);
      
        
    });

      console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}else{
     console.log("Bought furniture:")
     console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}

}


furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']
)
furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase'])
furniture(['>Invalid<<!4',
'>Invalid<<!2',
'>Invalid<<!5',
'Purchase'])
