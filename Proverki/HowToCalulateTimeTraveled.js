function walkTime(steps, length, speed) {
  // distance in meters
  let distance = length * steps;
  // how many brakes has been taken rounded down
  let brakeTimes = Math.floor(distance / 500);

  // total time  plus converting brake times  to muntes 1 to 1 ratio
  let time = distance / (speed * 1000) + brakeTimes / 60;
  // find hous . miutes and  seconds from the floats.
  let hours = Math.floor(time);

  let minutes = Math.floor((time - hours) * 60);

  let seconds = Math.round(((time - hours) * 60 - minutes) * 60);
  // log  it and dont forget to   compensate the 0 in the 00 : 00 : 00
  console.log(
    `${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`
  );
}

walkTime(4000, 0.6, 5);
