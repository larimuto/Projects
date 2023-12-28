function sorting(set) {

set.sort((a,b) => a.length-b.length ||a.localeCompare(b) )


   console.log(set.join('\n'));
}
sorting(['alpha', 'beta', 'gamma'])


