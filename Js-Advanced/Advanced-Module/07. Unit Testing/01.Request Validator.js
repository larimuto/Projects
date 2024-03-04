function requestValidator(obj) {
    let correctModules = ["GET", "POST", "DELETE", "CONNECT"]
    let uriRegExp = /^(?:[a-zA-Z0-9.]+|\*)$/
    let validVersions = [ "HTTP/0.9", "HTTP/1.0", "HTTP/1.1" , "HTTP/2.0"]
    let validMessage = [ "<", ">" , "\\" , "&", `'`,`"` ]

    if (!correctModules.includes(obj.method)){
        throw  new Error("Invalid request header: Invalid Method")

    }

    if(!obj.uri || !obj.uri.match(uriRegExp)){

        throw  new Error("Invalid request header: Invalid URI")
    }
   
if(!validVersions.includes(obj.version)){
    throw  new Error("Invalid request header: Invalid Version")
   
}

if (!obj.hasOwnProperty("message")) {
    throw new Error("Invalid request header: Invalid Message");

}

for( let el of obj.message){
if(validMessage.includes(el)){
    throw new Error("Invalid request header: Invalid Message")

}


}



return obj
}
requestValidator({

    method: 'POST',
    uri: 'home.bash',
    version: 'HTTP/2.0',

    
    })
