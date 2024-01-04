function addRemoveElement(array) {
  x = 1;
  initial = [];
  // initial.push(x)
  let command = array.shift();

  while (command != undefined) {
    
    if (command == "add") {
      initial.push(x);
      x += 1
    } else {
      initial.pop();
      x += 1
    }

    command = array.shift();
  }
 if(initial.length>0){ console.log(initial.join("\n"));}else{console.log("Empty");}
}
addRemoveElement(["add", "add", "add", "add"]);
// 1 ,2,3,4
addRemoveElement(["add", "add", "remove", "add", "add"]);
// 1,4,5
addRemoveElement(['remove', 
'remove', 
'remove'])
