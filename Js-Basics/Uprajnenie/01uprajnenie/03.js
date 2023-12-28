function depositCalculator(input){
    let depositedSum = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let annualInterestprocent = Number(input[2]);
    let annualInterestDecimal = annualInterestprocent / 100;
    let finalSum = depositedSum + depositPeriod * ((depositedSum * annualInterestDecimal)/ 12);
    console.log(finalSum);
}
depositCalculator(["200","3","5.7"]);