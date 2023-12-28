function Class(input) {
    let index = 0;
    let row = input[index];

    while (row !== "End"){

        let destination = row;
        index++
        let buget=Number(input[index])
        let sum = 0
           while (sum < buget ){
            index++;
            let currentSum= Number(input[index])
            sum += currentSum;
           }
           console.log(`Going to ${destination}!`);
           index++
           row = input[index]

    }

    
}