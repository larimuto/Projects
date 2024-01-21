function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    // input

    let mList = document.querySelector("#inputs textarea").value;

    // restoran output
    let bestRestOutput = document.querySelector("#outputs #bestRestaurant p");
    let bestWorkersOutput = document.querySelector("#outputs #workers p");

    // all restorants
    let restourants = {};
    // entire object for the best to  OUTPUT from
    let bestRest = {};

    // support for  compairing
    let bestAvg = 0;

    // make em in  array
    mList = JSON.parse(mList);

    for (const entry of mList) {
      //split the name
      let restorant = entry.split(" - ")[0];

      // make a list for the personal
      let personal = entry.split(" - ")[1].split(", ");
      // see if dosent  exist
      if (restourants.hasOwnProperty(restorant) != true) {
        restourants[restorant] = {};
      }
      // set the name and salary
      for (let person of personal) {
        let [name, salary] = person.split(" ");

        // chek if it exist or not  , both do the same , but if  change is needed later  add else
        if (restourants[restorant].hasOwnProperty(name)) {
          restourants[restorant][name] = Number(salary);
        } else {
          restourants[restorant][name] = Number(salary);
        }
      }
    }

    //now once the  all restoaurants are in the list , go trough each element

    for (let element of Object.entries(restourants)) {
      //  sort the salary list for  the result
      let sortedSalary = Object.entries(element[1]).sort((a, b) => b[1] - a[1]);
      //count the total slary and  then avarage
      let totalSalary = Object.values(element[1]).reduce(
        (acc, sum) => acc + sum,
        0
      );
      let avarageSalary = (Number(totalSalary) / sortedSalary.length).toFixed(
        2
      );

      // find the best salary wich is inside index [0] on sub index [1]
      let bestSalary = sortedSalary[0][1].toFixed(2);
      // add the avarage and best salary
      restourants[element[0]]["bestSalary"] = bestSalary;

      restourants[element[0]]["avarageSalary"] = avarageSalary;
      // check if best salary is  the current one  or not
      if (avarageSalary > bestAvg) {
        // if it is exchange  the  bestRest onject witht he current  best
        bestAvg = Number(avarageSalary);
        bestRest = { [element[0]]: sortedSalary };
        bestRest["bestSalary"] = bestSalary;

        bestRest["avarageSalary"] = avarageSalary;
      }
    }
    // find the name of the best restoaurant
    let trigger = Object.keys(bestRest)[0];
    // make a list for the  result of workers
    let finalWorkers = "";
    // fill the worker list
    bestRest[trigger].forEach((x) => {
      finalWorkers += `Name: ${x[0]} With Salary: ${x[1]} `;
    });
    // print the resylt per specific
    bestRestOutput.textContent = `Name: ${
      Object.keys(bestRest)[0]
    } Average Salary: ${bestRest.avarageSalary} Best Salary: ${
      bestRest.bestSalary
    }`;
    bestWorkersOutput.textContent = finalWorkers;

    debugger;
  }
}
