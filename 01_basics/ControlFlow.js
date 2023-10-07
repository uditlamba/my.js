// if
// = for assign the value
// == for comparision
// === camparision with data type

// if(2=="2"){
//     console.log("executed");
      
// }

// if("2"==="2"){
//     console.log("executed code");
      
// }

// const temp=41
// if(temp===41){
//     console.log("Temp is less than 50");
// }
// else{
// console.log("temp is greater than 50");
// }


// const score=200
// if(score>100){
//     const power="fly"
//     console.log("User power:  ",power);
// }
// console.log("User power: ",);


// const balance =1000
// // if(balance>500) console.log("balance is greater than 500");


// if(balance<500){
//     console.log("less than");
// }else if(balance<700){
//     console.log("less than 700");
// }else if(balance<900){
//     console.log("less than 900");
// }else{
//     console.log("No idea");
// }


const isLoggenIn=true
const debitCard=true
const loggedInFromGoogle=true
const loggedInFromgmail=false
// AND

if(isLoggenIn && debitCard){
    console.log("Allow to buy course");
}

//OR
if(loggedInFromgmail || loggedInFromGoogle){
    console.log("User logged in");
}