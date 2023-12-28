
// You will be given an array of strings.

// The first element will be a string containing wagons (numbers). Each number inside the string represents the number of passengers that are currently in a wagon. 

// The second element in the array will be the max capacity of each wagon (single number).

// The rest of the elements will be commands in the following format:

// Add {passengers} – add a wagon to the end with the given number of passengers.

// {passengers} - find an existing wagon to fit all the passengers (starting from the first wagon)

// At the end, print the final state of the train (all the wagons separated by a space).






function train(set) {
let currentCapacity = set[0].split(' ').map(Number);
let wagonCapacity = Number(set[1])



function capCheck(array , num ,wagonCapacity){
    num= Number(num)

for (let index = 0; index < array.length; index++) {
    if (array[index] + num <= wagonCapacity) {return  index
        
    }else{ }
    
}





}

for (let index = 2; index < set.length; index++) {
     currentCheck = set[index].split(" ")     ;
     
     if (currentCheck[0] === "Add" )
      { currentCapacity.push(Number(currentCheck[1]))
        
    
       }else{
        
        
        scale = capCheck(currentCapacity,currentCheck, wagonCapacity)
       
        

    toReplace = currentCapacity[scale ]+ Number(set[index])
       currentCapacity[scale]= toReplace
        
    
    }


}

console.log(currentCapacity.join(' ')); 

}

train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6'])