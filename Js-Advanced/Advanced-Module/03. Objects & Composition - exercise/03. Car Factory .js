function cars({ model, power, color, carriage, wheelsize }) {
  let car = {};
  let avbEngiens = {
    small: { power: 90, volume: 1800 },

    normal: { power: 120, volume: 2400 },

    monster: { power: 200, volume: 3500 },
  };

  // set a model
  car['model'] = model;

  // set engine type
  if (power <= 90) {
    car.engine = avbEngiens.small;
  } else if (power <= 120) {
    car[`engine`] = avbEngiens.normal;
  } else {
    car["engine"] = avbEngiens.monster;
  }
  // set carrage and color
  car["carriage"] = { 'type': carriage, 'color': color };
  // set wheel size
  if (wheelsize % 2 === 0) {
    --wheelsize; }
    car.wheels = Array(4).fill(wheelsize);
 
  return car;
}
console.log(cars({ model: 'Opel Vectra',

power: 110,

color: 'grey',

carriage: 'coupe',

wheelsize: 17 }));

//{ model: 'VW Golf II', engine: { power: 90, volume: 1800 }, carriage: { type: 'hatchback', color: 'blue' }, wheels: [13, 13, 13, 13] }
