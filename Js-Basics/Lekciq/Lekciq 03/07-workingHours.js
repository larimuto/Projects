function workingHours(input){
    let hourToChek = Number(input[0]);
    let dayOfWeek = input[1];

    if(hourToChek>=10 && hourToChek <=18){
        switch (dayOfWeek) {
            case "Monday":
                console.log("open");
                break;
            case "Tuesday":
                console.log("open");
                break;
            case "Wednesday":
                console.log("open");
                break;
            case "Thursday":
                console.log("open");
                break;
            case "Friday":
                console.log("open");
                break;
            case "Saturday":
                console.log("open");
                break;
            case "Sunday":
                console.log("closed");
                break;
                
    }


}else{console.log("closed");}
}
workingHours(["119","Monday"])