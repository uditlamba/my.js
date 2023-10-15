// const Mumma=document.querySelector('#mummy')
// document.querySelector('#kurta').onclick=function(){
//     alert("Single Photo")
// }

//type,timestamp,defaultPrevented
//target,toElement,scrElement,currentTarget,
//clientX,clientY,screenX,sceenY
//altkey,ctrlkey,keyCode

// Mumma.addEventListener('click',function(){
//     document.querySelector('#M').innerHTML="Clicked on Mumma Photo"
// })
// document.getElementById('image').addEventListener('click',function(e){
//     console.log("clicked inside the ul");
// },false)
// document.getElementById('yuvan').addEventListener('click',function(e){
//     console.log("clicked inside the yuvan");
//     e.stopPropagation()
// },false)
// document.getElementById('google').addEventListener('click',function(e){
//     console.log("google clicked");
//     e.preventDefault()

// })

//image remove

document.querySelector('#image').addEventListener('click',function(e){
    console.log(e.target.parentNode);
    let removeIt=e.target.parentNode
    removeIt.remove()
},false)