function replaceRepeatingChars(array) {
list = ''
last = ""

for (elements of array) {
  
    if(last !=elements){        //chech if elements are different if so add last occurance and replace  LAST sean entry
        list+=elements
        last = elements
    }
   }
console.log(list);
}
replaceRepeatingChars('abbbbbcdddeeeedssaa')