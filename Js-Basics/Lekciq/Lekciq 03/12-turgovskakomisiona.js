function commision(input){
    let cityName = input[0];
    let qtySales = Number(input[1]);

    if (cityName === "Sofia" || cityName === "Varna" || cityName === "Plovdiv"){

        if(qtySales >= 0){

            switch (cityName) {
                case "Sofia":
                    if (qtySales >= 0 && qtySales <=500 ) {
                        console.log((qtySales * 0.05).toFixed(2));                        
                    }else if (qtySales > 500 && qtySales <=1000 ){
                        console.log((qtySales * 0.07).toFixed(2));
                    }else if (qtySales > 1000 && qtySales <=10000){
                        console.log((qtySales * 0.08).toFixed(2));
                    }else if ( qtySales >10000 ){
                        console.log((qtySales * 0.12).toFixed(2));
                    }
                    
                    break;
                case "Varna":
                    if (qtySales >= 0 && qtySales <=500 ) {
                        console.log((qtySales * 0.045).toFixed(2));                        
                    }else if (qtySales > 500 && qtySales <=1000 ){
                        console.log((qtySales * 0.075).toFixed(2));
                    }else if (qtySales > 1000 && qtySales <=10000){
                        console.log((qtySales * 0.1).toFixed(2));
                    }else if ( qtySales >10000 ){
                        console.log((qtySales * 0.13).toFixed(2));
                    }
                    
                    break;
                case "Plovdiv":
                    if (qtySales >= 0 && qtySales <=500 ) {
                        console.log((qtySales * 0.055).toFixed(2));                        
                    }else if (qtySales > 500 && qtySales <=1000 ){
                        console.log((qtySales * 0.08).toFixed(2));
                    }else if (qtySales > 1000 && qtySales <=10000){
                        console.log((qtySales * 0.12).toFixed(2));
                    }else if ( qtySales >10000 ){
                        console.log((qtySales * 0.145).toFixed(2));
                    }
                    
                    break;
                
               
            }

        }else{console.log("error");}




    }else{ console.log("error");}





}

commision(["Varna", "3874.50"])