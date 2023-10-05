const marval_Heroes=["thor","Ironman",'spiderman']
const dc_Heroes=["superman","flash","batman"]
// marval_Heroes.push(dc_Heroes)
// console.log(marval_Heroes);
// console.log(marval_Heroes[3]);
const all_Heroes=marval_Heroes.concat(dc_Heroes)
// console.log(all_Heroes);

const new_Heroes=[...marval_Heroes,...dc_Heroes]
// console.log(new_Heroes);

const A=[1,2,3,[4,5,6,8],9,6,[78,45,25]]
const B=A.flat(Infinity)
console.log(B);
console.log(Array.isArray(B));

console.log(Array.isArray("Udit"));
console.log(Array.from("Udit"));

console.log(Array.from({name:"Udit"}));

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));


