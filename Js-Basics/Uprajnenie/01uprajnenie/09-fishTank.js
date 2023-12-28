// обем на аквариумa: 85 * 75 * 47 = 299625 см3 
// обем в литри: 299625 * 0.001 или 
// 299625 / 1000 => 299.625 
// литра заето пространство: 17% = 0.17 
// нужни литри: 299.625 * (1 - 0.17) = 248.68875 литра 

function fishTank(input){
    let volInCm3 = Number(input[0]) * Number(input[1]) * Number([input[2]]);
    let volInLiters = volInCm3 / 1000;
    let ocpSpace = Number(input[3])/100
    let reqLitters = volInLiters * (1-ocpSpace);
    console.log(reqLitters);

}

fishTank(["85","75","47","17"]);