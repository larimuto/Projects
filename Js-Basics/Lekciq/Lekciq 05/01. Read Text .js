function funName(input){
    
    let index = 0;
    let data = input[index]

    while (data !== "Stop" ) {
         console.log(data);
         index++
         data= input[index]
    }

   
}
funName(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])