function solve(array) {
    let x = Number(array.shift())
    let regex = /^([$%])(?<n>[A-Z][a-z]{2,})\1: \[(?<n1>\d+)\]\|\[(?<n2>\d+)\]\|\[(?<n3>\d+)\]\|$/

   let count = 0 
while(count < x ){
  tomatch = array.shift()
 if(tomatch.match(regex) != null ){ 

    // help = regex.exec(tomatch)
    let help = tomatch.match(regex)
    let {n, n1, n2, n3} = help.groups
   
let a = String.fromCharCode(n1)
let b = String.fromCharCode(n2)
let c = String.fromCharCode(n3)
  
  
console.log(n+":"+" "+a+b+c);
 }else{console.log("Valid message not found!");}



count++
}
}
solve((["4", "$Request$: [73]|[115]|[105]|", "%Taggy$: [73]|[73]|[73]|", "%Taggy%: [118]|[97]|[108]|", "$Request$: [73]|[115]|[105]|[32]|[75]|"]) )