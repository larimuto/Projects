function solve() {
let text = document.getElementById("text").value
let  state = document.getElementById("naming-convention").value
let result = document.getElementById("result")

if(state != "Camel Case" || "Pascal Case"){ return  result.textContent = "Error!"}
if(state == "Pascal Case"){
   text.reduce((acc,x) =>acc + x , '')





}


}