function projectCreation(input){
 let name=input[0];
 let projects=input[1];
 let totalTime= projects * 3;
 console.log(`The architect ${name} will need ${totalTime} hours to complete ${projects} project/s. `);   
}
projectCreation(["George" , 4 ]);