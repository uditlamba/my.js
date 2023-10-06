// const tinderUser=new Object() //singleton obj
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isloggedIn=false

// console.log(tinderUser);

const regularUser={
email:"Udit23@.com",
fullname:{
        userfullname:{
            firstname:"udit",
            lastname:"lamba"

        }
    }
}
console.log(regularUser.fullname.userfullname.lastname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2}
console.log(obj3)

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('islogged'));



