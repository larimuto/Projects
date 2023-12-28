function funName(input) {
    let tabsOpen= Number(input[0]);
    let salary = Number(input[1]);
   
       

for (let i = 2; i < input.length ; i++) {
    let sitesTocheck = input[i];

   if(sitesTocheck==="Facebook"){salary-=150;    
    }else if(sitesTocheck==="Instagram" ){salary-=100
    }else if (sitesTocheck==="Reddit" ){salary-=50}

    
        
    }
    
    
   if (salary<=0) {console.log("You have lost your salary.")
} else{ console.log(salary);}
}

funName(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])