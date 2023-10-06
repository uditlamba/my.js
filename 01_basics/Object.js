//  when we creat a obj as constructor so it create singleton

// Object.create()

// object literals

const mysym =Symbol("key1")


const JsUser={
    name:"Udit",
    "full name":"Udit Lamba",
    [mysym]:"Key1",
    age:22,
    location:"Jaipur",
    email:"Udit23@JsUser.co",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(JsUser.age);
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mysym]);

// JsUser.email="lamba@.com"
// console.log(JsUser["email"]);

// Object.freeze(JsUser)  // when we user freeze than no change in obj
// JsUser.email="rishabh@.co"
// console.log(JsUser["email"]);

JsUser.greeting=function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo=function(){
    console.log('Hello Js User, ${this.name}');
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



