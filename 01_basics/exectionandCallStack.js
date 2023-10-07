//javascript execution context
// {} global execution context(this)

// javascript is a single thread language 

// we have two execution context in javascript 
// 1- global execution context
//2- function execution context

// 3- other one Eval execution context or it is also property of global execution context

// {} =>  Run in two phase 
// 1- Memory creation Phase (creation Phase)
// 2- Execution Phase

let val1=10
let val2=5
function addNum(num1,num2){
    return  num1+num2
}
let res1=addNum(val1,val2)
let res2=addNum(8,6)
console.log((res1)); 
console.log(res2);