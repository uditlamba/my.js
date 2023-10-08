//reduce use for shopping etc website

const myNums=[1,2,3]

// const myTotal=myNums.reduce(function(acc,currval){
//     console.log('acc',acc,"and currval",currval);
//     return acc + currval
// },1)

// const myTotal=myNums.reduce((acc,currval)=> acc+currval,3)

// const myTotal=myNums.reduce((acc,currval)=> {return acc+currval},3)


// console.log(myTotal);

const shoppingCart=[
    {
        itemName:"Js course",
        price:3999
    },
    {
        itemName:"python course",
        price:2999
    },
    {
        itemName:"c++ course",
        price:4999
    },
    {
        itemName:"java course",
        price:1999
    }
]
const total=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(total);