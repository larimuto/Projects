function fruitShop(input){
    let product = input[0];
    let dayOfWeek = input[1];
    let boughtItems = Number(input[2]);
    if(dayOfWeek === "Saturday" || dayOfWeek === "Sunday"){
        switch (product) {
            case "banana":
                console.log((boughtItems * 2.70).toFixed(2));                
                break;
            case "apple":
                console.log((boughtItems * 1.25).toFixed(2));                
                break;
            case "orange":
                console.log((boughtItems * 0.90).toFixed(2));                
                break;
            case "grapefruit":
                console.log((boughtItems * 1.60).toFixed(2));                
                break;
            case "kiwi":
                console.log((boughtItems * 3.00).toFixed(2));                
                break;
            case "pineapple":
                console.log((boughtItems * 5.60).toFixed(2));                
                break;
            case "grapes":
                console.log((boughtItems * 4.20).toFixed(2));                
                break;
                default:
                    console.log("error");
                    break;
            
            
               
        }
    }else if(dayOfWeek=== "Monday" || dayOfWeek === "Tuesday" || dayOfWeek=== "Wednesday" ||  dayOfWeek === "Thursday" || dayOfWeek === "Friday"){
        switch (product) {
            case "banana":
                console.log((boughtItems * 2.50).toFixed(2));                
                break;
            case "apple":
                console.log((boughtItems * 1.20).toFixed(2));                
                break;
            case "orange":
                console.log((boughtItems * 0.85).toFixed(2));                
                break;
            case "grapefruit":
                console.log((boughtItems * 1.45).toFixed(2));                
                break;
            case "kiwi":
                console.log((boughtItems * 2.70).toFixed(2));                
                break;
            case "pineapple":
                console.log((boughtItems * 5.50).toFixed(2));                
                break;
            case "grapes":
                console.log((boughtItems * 3.85).toFixed(2));                
                break;
                default:
                console.log("error");
            
        
    }




}else{console.log("error");}
}

fruitShop(["apple",
"Tuesday",
"2"])