function moving(input){
    let index = 0

    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let height = Number(input[index]);
    index++;
    let volume = width * length * height;
    let boxesCount = input[index];
    index++


    while (boxesCount !== 'Done') {
        boxesCount = Number(boxesCount)
        volume -=boxesCount ; 
        if (volume<= 0 ) {
            console.log(`No more free space! You need ${Math.abs(volume)} Cubic meters more.`);
                return
            
        }
        boxesCount = input[index];
        index++


    }


    console.log(`${volume} Cubic meters left.`);



}
moving(["10",
"1",
"2",
"4",
"6",
"Done"])