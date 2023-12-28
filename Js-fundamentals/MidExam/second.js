function coffe(array){
    coffeList= array.shift().split(' ')
    count = array.shift()
    






for (let i = 0; i < array.length; i++) {

            currentCommand = array[i].split(' ')

            

        switch (currentCommand[0]) {
            case "Include":
                coffeList.push(currentCommand[1])
                break;
        
            case "Remove":
                let slice =Number(currentCommand[2])
                if( currentCommand[2]>coffeList.length-1 ) { break;

                }else if( currentCommand[1] == "first"){ coffeList.splice(0,slice) 
                
                
                
                }else if(currentCommand[1]== "last"){
                let a=1
                    while ( a <= Number(currentCommand[2])){ coffeList.pop(); 
                         
                        a++
                    
                    
                    }
                   
                }
             
                break;
        
            case "Prefer":
                let index1 = Number(currentCommand[1]);
                let index2 = Number(currentCommand[2]);

                if((index1 >=0 && index1 <=coffeList.length) &&(index2 >=0 && index2 <=coffeList.length) ){ [coffeList[index1] ,coffeList[index2]] = [coffeList[index2] ,coffeList[index1]]}



                break;
        
            case "Reverse":
              coffeList= coffeList.reverse();
                

                
                break;
        
           





    
    
}


}


console.log("Coffees:");
console.log(coffeList.join(' '));

}


coffe(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee", "5", "Include TurkishCoffee", "Remove first 2", "Remove last 1", "Prefer 3 1", "Reverse"])