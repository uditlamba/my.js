const name="udit"

// console.log('my name is ${name}');
const Name=new String("udit")
console.log(Name[0]);
console.log(Name.__proto__);

console.log(Name.length);
console.log(Name.toUpperCase());
console.log(Name.charAt(2));
console.log(Name.indexOf('t'))

const newString=Name.substring(0,2)
console.log(newString);

const anotherString=Name.slice(-8,3)
console.log(anotherString)

const newStringOne="     udit   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://udit.com/udit23@.com"
console.log(url.replace('23','_'));

console.log(url.includes('udit'));

console.log(Name.split('i'));