function pascalCaseSplitter(array) {
    list =""
  
  for ( element of array) {
  
    if (element == element.toLowerCase()){
      list+=element
    }else{
      list += " "
      list += element
    
    }
   
    
  }
  console.log(list.trim().split(" ").join(", "));
  }
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')