function andy(end) {
console.log(1);
for (let start = 2; start <= end; start++) {
    let curRow = 1
    row = "";
    while (curRow <= start ) { 
       row += start.toString() + " "
        curRow++
            }
    console.log(row);
    }
    }
andy(10)