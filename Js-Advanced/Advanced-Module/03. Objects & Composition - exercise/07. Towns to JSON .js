function txtToJSON(array) {
  let list = [];
  let expr = /\s*\|\s*/g
//   let expr = /\b[a-z]+(?:\s+[a-z]+)*|\b[a-z]+\b|\d+[.]+\d+/gmi;
  // tale the header names

  let [s, town, latitude, longitude] = array.shift().split(expr);
 

  // go trough and fill the list with the assinged towns
  for (let row of array) {
   
    let [x,name, lat, long] = row.split(expr);
 
    lat = Number(lat).toFixed(2);

    // toFixed makes a string , so double wrap em in Number
    let obj = {
      [town]: name,
      [latitude]: Number(Number(lat).toFixed(2)),
      [longitude]: Number(Number(long).toFixed(2)),
    };

    list.push(obj);
  }
  console.log(JSON.stringify(list));
}
txtToJSON(['| Town | Latitude | Longitude |',

'| Veliko Turnovo turnovo | 43.0757 | 25.6172 |',

'| Monatevideo | 34.50 | 56.11 |'] );
//[{"Town":"Veliko Turnovo", "Latitude":43.08, "Longitude":25.62 }, {"Town":"Monatevideo", "Latitude":34.5, "Longitude":56.11 }]
