function fuName(input){

    let number = Number(input[0]);
    let index = 1;
    let data = input[index];
    let sum = 0;
    while(sum < number && index<=input.length)
    {
sum = sum + Number(data);
index++;
data = input[index];

    }

console.log(sum);



}

fuName (["20", "1", "2", "3", "4", "5", "6"]) 