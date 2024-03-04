function getArticleGenerator(articles) {
let list = Array.from(articles)
const mainDiv = document.querySelector("#content")


 return function showNext() {

if (list.length-1 < 0) {return
}
  element  = document.createElement("article")
    element.textContent = list.shift()
    element.style.display = "inline-block"
    mainDiv.appendChild(element)
    
    
}






}
