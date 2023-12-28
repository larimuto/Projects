function kaboomBaby(nums, blow) {

let [bombNum, power] = blow;

while (nums.includes(bombNum)){

    let idx = nums.indexOf(bombNum);
    nums.splice(Math.max(0, idx - power), power * 2 + 1, 0)
}
sum = nums.reduce((a,b )=> a+b)

console.log(sum);

}
kaboomBaby([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1])