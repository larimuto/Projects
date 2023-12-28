function radarTime(speed, area) {
  let limit;
  // find the area
  switch (area) {
    case "motorway":
      limit = 130;

      break;
    case "interstate":
      limit = 90;

      break;
    case "city":
      limit = 50;

      break;
    case "residential":
      limit = 20;

      break;

    default:
      console.log("ShrekBabyDoll");
      break;
  }

  let isSpeeding = speed - limit;
  // check in asscending order    if its speeding or not
  if (isSpeeding <= 0) {
    console.log(`Driving ${speed} km/h in a ${limit} zone`);
  } else if (speed - limit <= 20) {
    console.log(
      `The speed is ${
        speed - limit
      } km/h faster than the allowed speed of ${limit} - ${"speeding"}`
    );
  } else if (speed - limit <= 40) {
    console.log(`The speed is ${
      speed - limit
    } km/h faster than the allowed speed of ${limit} - ${"excessive speeding"}`);
  } else {
    console.log(
      `The speed is ${
        speed - limit
      } km/h faster than the allowed speed of ${limit} - ${"reckless driving"}`
    );
  }
}
radarTime(120, "interstate");

// 40, 'city' 

// 21, 'residential' 

// 120, 'interstate' 

// 200, 'motorway' 


