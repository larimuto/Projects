function vacation(input) {
    index = 0;
    let moneyForVacantion = Number(input[index]);
    index++;

    let availableMoney = Number(input[index]);
    index++;

    // let action;
    // let money = 0;

    let spendCount = 0;
    let savedCount = 0;

    while (availableMoney < moneyForVacantion && spendCount < 5) {
        // while (index < input.length) {
        // if (index % 2 === 0) {
        //     action = input[index];
        // } else if (index % 2 == 1) {
        //     money = Number(input[index]);
        // }

        let action = input[index];
        index++;
        let money = Number(input[index]);
        index++;


        if (action === "save") {
            availableMoney += money;
            // Ако 5 последователни дни Джеси само харчи, на конзолата да се изпише
            spendCount = 0;
        } else if (action === "spend") {
            availableMoney -= money;
            // Ако 5 последователни дни Джеси само харчи, на конзолата да се изпише
            spendCount++;
        }

        // index++;

        // Ако иска да похарчи повече от наличните си пари, то тя ще похарчи всичко, което има и ще ѝ останат 0 лева.
        if (availableMoney < 0) {
            availableMoney = 0;
        }

        savedCount++;

        if (index >= input.length) {
            break;
        }
    }

    if (spendCount >= 5) {
        // "You can't save the money."
        // "{Общ брой изминали дни}"
        console.log(`You can't save the money.`);
        console.log(`${savedCount}`);
    } else if (availableMoney >= moneyForVacantion) {
        // "You saved the money for {общ брой изминали дни} days."
        console.log(`You saved the money for ${savedCount} days.`);
    }


    // if (availableMoney < 0) {
    //     console.log(`You can't save the money.`);
    //     console.log(`${spendCount}`);
    // } else if (availableMoney >= moneyForVacantion) {
    //     console.log(`You saved the money for ${savedCount} days.`);
    // }
}