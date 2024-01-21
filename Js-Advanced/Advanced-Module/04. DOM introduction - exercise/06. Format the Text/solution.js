function solve() {
  let text = document.getElementById("input").value;
  let output = document.getElementById("output");
  // split thext into paragraphs
  let finalText = text.split(".")
  // remove the  line brake from the  end of the string to not  abjust it along.
  finalText.pop()
  //  add counter for the while
  let counter = finalText.length - 1;

  debugger

  while (counter >= 0) {
    // find the current itteration of the  while
    let index = finalText.length - 1 - counter;
    //  add paragraph and chck for the second and third entry  if they are != undefind , use ternary
    if (counter === 0) {
      output.innerHTML += `<p>${(finalText[index].length >0 && finalText[index].length !== undefined ? finalText[index]: "")}.</p>`;

      counter -= 1;
    } else if (counter  === 1) {
      output.innerHTML += `<p>${(finalText[index].length >0 && finalText[index].length !== undefined ? finalText[index]: "")}. ${(finalText[index+1].length >0&& finalText[index+1].length !== undefined ? finalText[index+1]: "")}.</p>`;

      counter -= 2;
    } else {
      console.log(index);
      output.innerHTML += `<p>${(finalText[index].length >0 && finalText[index].length !== undefined ? finalText[index]: "")}. ${(finalText[index+1].length >0 && finalText[index+1].length !== undefined? finalText[index+1]: "")}. ${(finalText[index+2].length >0 && finalText[index+2].length !== undefined ? finalText[index+2]: "")}.</p>`;

      counter -= 3;
    }
    // always have 1 on your mind
    debugger
  }
}





















// function solve() {
//   let text = document.getElementById("input").value;
//   let output = document.getElementById("output");

//   // split the text into sentences
//   let sentences = text.split(".");
//   let paragraphCount = Math.ceil(sentences.length / 3);

//   // clear existing content in the output div
//   output.innerHTML = '';

//   for (let i = 0; i < paragraphCount; i++) {
//     // determine the start and end indices for each paragraph
//     let startIdx = i * 3;
//     let endIdx = startIdx + 2;

//     // create a new paragraph element
//     let paragraph = `<p>${sentences.slice(startIdx, endIdx + 1).join('.')}</p>`;

//     // append the paragraph to the output div
//     output.innerHTML += paragraph;
//   }
// }
