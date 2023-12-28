function cace(input) {
let index = 0;

let width = Number(input[index]);
index++
let length = Number(input[index]);
index++


let totalPieces= width * length;
let piecesTaken = input[index];
index++
while (piecesTaken !== 'STOP'){

    piecesTaken = Number(piecesTaken);
    totalPieces-=piecesTaken;
    if(totalPieces <=0){break}
    
    piecesTaken = input[index];
index++;
}

if (piecesTaken === 'STOP') { console.log(`${totalPieces} pieces are left.`);}else{
    console.log(`No more cake left! You need ${Math.abs(totalPieces)} pieces more.`);
}

    
}
cace