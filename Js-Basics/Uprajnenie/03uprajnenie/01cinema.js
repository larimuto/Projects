function cinema(input){
let fimltype = input[0];
let rows = Number(input[1]);
let cols = Number(input[2]);

let profit = 0;
let ticketCount = rows * cols;
if(fimltype === 'Premiere'){
    profit = ticketCount * 12.0;

}else if (fimltype === 'Normal'){
        profit = ticketCount * 7.50;
    }else if (fimltype === 'Discount'){
        profit = ticketCount * 5.00;
     }
     console.log(`${profit.toFixed(2)} leva`);
}

cinema(["Discount", "12", "30"]);