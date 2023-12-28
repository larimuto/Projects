function firms(array) {
    let list = {}


    for ( el of array ) {
        [firm, id]= el.split(" -> ")                                    
       

        if(firm in list){                                            //create the firms 

            
            list[firm]+=" " + id                                      //addin the ids as strings 
            



        }else{list[firm]=id }
       
    }
   list=Object.entries(list).sort((a,b)=>a[0].localeCompare(b[0]) )                      // switch list to Obj.entries  and  sort in asending by key

    
    for ( [firm, ids] of list) {                             
        ids = ids.split(" ")

                                               //filter  non uniqe ids
        


    }



for ([key,value] of list) {                                                                 //result 
    value= value.split(' ')



value=value.filter((value, index, array) => array.indexOf(value) === index)      // filter  nonUniqe ids out
console.log(key);
value.forEach(x => {console.log("-- "+x);   
});
    
}


}
firms([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    )