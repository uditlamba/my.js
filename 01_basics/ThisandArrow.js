const user={
    username:"udit ",
    price:999,
    welcomeMsg:function(){
        console.log(this.username,'welcome to website');
        console.log(this);
    }


}
// user.welcomeMsg()
// user.username="lamba"
// user.welcomeMsg()



// function chai(){
//     let userName="udit"
//     console.log(this.userName);
// }
// chai()
      
const chai1=()=>{
    username="lamba"
    console.log(this.username);
}
// chai1()

// const addNum=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addNum(4,8));


//implicity return

// const addNum=(num1,num2)=>  num1+num2


const addNum=(num1,num2)=>  (num1+num2)
console.log(addNum(4,8))
 
