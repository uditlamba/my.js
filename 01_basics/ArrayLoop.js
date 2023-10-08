//for of loop

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5,6]
for (const i of arr) {
    console.log(i);
    
}

const A="Hello World!"
for (const i of A) {
    console.log(i);
    
}


//maps

// map has unique value and in order
const map=new Map()
map.set('IN',"India")
map.set('USA',"United states of America")
map.set('Fr',"France")
map.set('IN',"India")

console.log(map);

for (const [key,value] of map) {
    console.log(key,":",value);
    
}
const myObj={
    game1:'NFS',
    game2:'spiderman'

}
// for (const [key,value] of myObj) {
//     console.log(key,":",value);
    
// } Not work 