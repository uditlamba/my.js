//for

// for(let i=0;i<=10;i++){
//     if(i==5){
//         console.log("5 is best number");
//     }
//     console.log(i);
// }

// for (let i =0;i <= 10; i++) {
//     // console.log("Outer loop",i);
//     for(let j=0;j<=10;j++){
//         // console.log("Inner loop",j, "and Outer loop",i);
//         console.log(i+'*'+j+'='+i*j);
//     }
//     // console.log(i);  
// }

//break and continue

for(let i=1;i<=20;i++){
    // if(i==5){
    //     break
    // }
    if(i==4){
        console.log("detectes",i);
        continue
    }
    console.log("Value of i is",i);

}