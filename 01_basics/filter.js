const myNum=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNum.filter((num)=>num>4)
// const newNums=myNum.filter((num)=>{
//     return num>4
// })

// const newNums=[]
// myNum.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//         console.log();
//     }
// })
// console.log(newNums);



//sytax of filter
//const Arr=[]
// const A=Arr.filter((i)=>i>5)
// console.log(A);

let users = [
    { name: 'John', age: 25, occupation: 'gardener' },
    { name: 'Lenny', age: 51, occupation: 'programmer' },
    { name: 'Andrew', age: 43, occupation: 'teacher' },
    { name: 'Peter', age: 81, occupation: 'teacher' },
    { name: 'Anna', age: 47, occupation: 'programmer' },
    { name: 'Albert', age: 76, occupation: 'programmer' },
]
// let NewUser=users.filter((U)=> U.age>=40)

NewUser =users.filter((U)=>{return U.occupation==="teacher" && U.age>=45})
console.log(NewUser);
