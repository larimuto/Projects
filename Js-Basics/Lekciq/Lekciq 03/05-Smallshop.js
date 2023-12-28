function smallShop(input){
    let product = input[0];
    let city = input[1];
    let qtyBought = Number(input[2]);
 

    if (city === "Sofia") {
        switch (product) {
            case "coffee":
                let coffePrice = 0.50;
                console.log(coffePrice * qtyBought);
                break;
            case "water":
                let waterPrice = 0.80;
                console.log(waterPrice * qtyBought);
                break;
            case "beer":
                let beePrice= 1.20;
                console.log(beePrice * qtyBought);
                break;
            case "sweets":
                let sweetsPrice = 1.45;
                console.log(sweetsPrice * qtyBought);
                break;
            case "peanuts":
                let peanutsPrice = 1.60;
                console.log(peanutsPrice * qtyBought);
                break
                    }
        
    }
    if (city === "Plovdiv") {
        switch (product) {
            case "coffee":
                let coffePrice = 0.4;
                console.log(coffePrice * qtyBought);
                break;
            case "water":
                let waterPrice = 0.7;
                console.log(waterPrice * qtyBought);
                break;
            case "beer":
                let beePrice= 1.15;
                console.log(beePrice * qtyBought);
                break;
            case "sweets":
                let sweetsPrice = 1.30;
                console.log(sweetsPrice * qtyBought);
                break;
            case "peanuts":
                let peanutsPrice = 1.50;
                console.log(peanutsPrice * qtyBought);
                break
                    }
        
    }
    if (city === "Varna") {
        switch (product) {
            case "coffee":
                let coffePrice = 0.45;
                console.log(coffePrice * qtyBought);
                break;
            case "water":
                let waterPrice = 0.70;
                console.log(waterPrice * qtyBought);
                break;
            case "beer":
                let beePrice= 1.10;
                console.log(beePrice * qtyBought);
                break;
            case "sweets":
                let sweetsPrice = 1.35;
                console.log(sweetsPrice * qtyBought);
                break;
            case "peanuts":
                let peanutsPrice = 1.55;
                console.log(peanutsPrice * qtyBought);
                break
                    }
        
    }





}

smallShop(["sweets", "Sofia", "2.23"])