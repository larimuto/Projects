function ops(year, month ,day) {
 let mont = month -1
   
happy = new Date(year,mont,day-1)
cDay=happy.getDate();
cMonth=happy.getMonth();
cYear=happy.getFullYear();

console.log(`${cYear}-${cMonth+1}-${cDay}`);
}

ops(2016, 9, 30)
ops(2015, 5, 10) 
