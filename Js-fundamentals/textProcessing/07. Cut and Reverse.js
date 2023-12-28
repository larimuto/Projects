function cutAndSwitch(array) {
    midPoint = array.length / 2     //find mid point
    first = array.slice(0, midPoint) // find first half and second half
    second = array.slice(midPoint)   
first = first.split("").reverse().join("")       //  make them in array to use reverse  and then join them
second = second.split("").reverse().join("")
console.log(first+"\n"+second);


// let list = ''
//  list +=first
// list +=second
// console.log(list);
}
cutAndSwitch('tluciffiDsIsihTgnizamAoSsIsihT')