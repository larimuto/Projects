function funName(input) {
    let poorGradeCount = Number(input[0]);
    let countPoorGrades = 0;
    let totalScore = 0;
    let lastProblem = "";
    let problemSolved = 0;
    let index = 1;

    while (index<input.length) {
        currentRow=input[index];
        

        if (currentRow==="Enough") {
            console.log(`Average score: ${(totalScore/ problemSolved).toFixed(2)}`);
            console.log(`Number of problems: ${problemSolved}`);
            console.log(`Last problem: ${lastProblem}`);
            
        }else if(countPoorGrades>=poorGradeCount){break;}else{
            if(index%2===0){ grade=Number(input[index]);
            totalScore+=grade;  
            if(grade<=4){countPoorGrades++}         
            }else{lastProblem=currentRow; problemSolved++

            }
        }
            index++
        
    }

    if(countPoorGrades>=poorGradeCount){console.log(`You need a break, ${countPoorGrades} poor grades.`);}


    
}
funName(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])
