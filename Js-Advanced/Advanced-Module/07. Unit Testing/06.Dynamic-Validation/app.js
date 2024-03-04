function validate() {
 let textInput = document.querySelector("input")
textInput.addEventListener("change", doTheConga)
let emailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/
function doTheConga(e){
   


   let email =  e.target.value
   console.log(email);


 if(!emailPattern.test(email)){

 e.target.classList.add("error")


 }else{ e.target.classList.remove("error");}


if(email === '' ){e.target.classList.remove("error");}

}

}