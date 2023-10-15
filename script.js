const sayHitesh = function(){
    console.log("Udit Lamba");
}
const changeText = function(){
    document.querySelector('h2').innerHTML = "Software Developer"
}

const changeMe = setTimeout(changeText, 2000)

document.querySelector('#Stop').addEventListener('click', function(){
    clearTimeout(changeMe)
    console.log("STOPPED")
})