function inventory(array){
    list=[]

    for( i = 0 ; i < array.length ; i++){
    [name , level , items] = array[i].split(' / ')
    obj = {name , level : Number(level), items}
    list.push(obj)

  
        
    }

  function doit(a,b) {
        return a.level - b.level
    }
sorted = list.sort(doit)
for(el of sorted){
console.log(`Hero: ${el.name}`)
console.log(`level => ${el.level}`)
console.log(`items => ${el.items}`)

}
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])