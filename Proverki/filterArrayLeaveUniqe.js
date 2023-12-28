


function test(value) {




console.log("Old -> "+ value);
console.log("-----------------------------------------------------------------------------------------------------")




newValue = value.filter((value, index, array) => array.indexOf(value) === index)  



//checks, if the given value is the first occurring. If not, it must be a duplicate and will not be copied.
//If you want to keep the last occurrence of a value, simply replace indexOf with lastIndexOf

// function onlyUnique(value, index, array) {
// return array.indexOf(value) === index;
//}






//Also using Set
// var myArray = ['a', 1, 'a', 2, '1'];

// let unique = [...new Set(myArray)];

// console.log(unique); // unique is ['a', 1, 2, '1']








console.log("new -> "+newValue);
}
test([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    ) 
    
