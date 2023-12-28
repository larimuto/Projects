// Write a function that receives an array and the number of rotations you have to perform. 
// Note: Depending on the number of rotations, the first element goes to the end.
function demo(set1 , count) {

    
for (let i = 0; i < count; i++){
    set1.push(set1[i]);
    
       
} 
for (let i = 0; i < count; i++) {
    set1.shift()
    
}

 
console.log(set1.join(" "));
}
demo([51, 47, 32, 61, 21], 2);