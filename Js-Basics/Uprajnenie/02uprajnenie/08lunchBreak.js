function lunch(input){
    let movieTitle = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number (input[2]);

    let lunchDuration = (1/8) * breakDuration;
    let leasureDuration = (1/4) * breakDuration;

    let totalTakenTime = lunchDuration + leasureDuration;
    let timeLeft = breakDuration - totalTakenTime;

    if (timeLeft >= episodeDuration){
        let timeAfterMovie = timeLeft - episodeDuration;
        console.log(`You have enough time to watch ${movieTitle} and left with ${Math.ceil(timeAfterMovie)} minutes free time.`);
    }else{
        let timeNeeded = episodeDuration -timeLeft;
        console.log(`You don't have enough time to watch ${movieTitle}, you need ${Math.ceil(timeNeeded)} more minutes.`);
    }
}
lunch(["Game of Thrones","60","96"])