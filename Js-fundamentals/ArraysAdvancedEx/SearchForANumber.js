// You will receive two arrays of integers. The second array is containing exactly three numbers. 
// The first number represents the number of elements you have to take from the first array (starting from the first one).
// The second number represents the number of elements you have to delete from the numbers you took (starting from the first one). 
// The third number is the number we search in our collection after the manipulations. 
// As output print how many times that number occurs in our array in the following format: 
// "Number {number} occurs {count} times."
function look(array,set) {
let lookNumber = set[2]
fistFromArray = array.slice(0,set[0]);

secondPass = fistFromArray.splice(set[1]);

let counter= 0

for (const element of secondPass) {

    if (element == set[2]) {
        counter+=1
    }
    
 

    
}



 
    console.log(`Number ${set[2]} occurs ${counter} times.`);

}
look([7, 1, 5, 8, 2, 7],
    [3, 1, 5])

look([5, 2, 3, 4, 1, 6],
    [5, 2, 3])

// abc = [1,2,3,4,5,6,7,8].slice(0,3)
// console.log(abc);