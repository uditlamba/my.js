const userEmail="udit@123"
if(userEmail){
    console.log("got user email");
}else{
    console.log("Dont have user email");
}

//Falsy Value => false,0,-0,BigInt 0n,"",null,undefined,NaN

//truly Value =>"0",'false'," ",[],{},function(){},

// if(userEmail.length===0){
//     console.log("Array is empty");
// }


const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("obj is empty");
}

//Nullish Coalescing Operator (??) : null Undedined
let val1;
// val1=5??10
// val1=null??23
val1=undefined??12

console.log(val1);

//Terninary Operator

//condition ?true:false

const icePrice=100
icePrice>=80?console.log("less than 80") :console.log("More Than 80");