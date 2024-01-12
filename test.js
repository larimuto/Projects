function tickTak(text) {
  text = text.split(" ")
  let result = ""
  
  
  for (const element of text) {
         let  start = element[0].toUpperCase()
          
        let end = element.slice(1).split("").map(x=>x.toLowerCase()).join("")
      result += start.concat(end)+" "
         
  }




str = result[0].toLowerCase()
end = result.slice(1)

return str.concat(end)
}

  tickTak('HeLlo d DAD ASd 2131331 x re' )