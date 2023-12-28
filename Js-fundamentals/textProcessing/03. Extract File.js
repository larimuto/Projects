function fileextractor(array) {
    array = array.split("\\")                                                                   //spliting and finding the target file.extension
  target = array[array.length-1]                            
  
 ext = target.slice(target.lastIndexOf(".")+1)                          // finding ext by slicing after last dot+1
 file = target.slice(-0, target.lastIndexOf(".") )              //finding file by slicing before last dot
 console.log("File name: " + file);
 console.log("File extension: " + ext);

 
    
}
fileextractor('C:\\Internal\\training-internal\\Template.pptx')