function obem(input){
let figur = input[0];
if(figur === 'square')
{
    let a = Number(input[1]);
    let area = a * a;
    console.log(area.toFixed(3));
}
    else if(figur === 'rectangle')
{
    let a = Number(input[1]);
    let b = Number(input[2]);
    let area = a * b;
    console.log(area.toFixed(3));
}else if(figur ==='circle'){
    let r = Number(input[1]);
    let area = Math.PI * r * r;
    console.log(area.toFixed(3));;
}
else if (figur === 'triangle'){
    let a = Number(input[1]);
    let ha = Number(input[2]);
    let area =(a*ha) / 2;
    console.log(area.toFixed(3));
}  
}
obem(["square", "5"])
