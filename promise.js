const promiseOne=new Promise(function(resolve,reject){
    //Do an async task
    //DB calls,cryptography,network
    setTimeout(function(){
        console.log('Async task is complete');
        // resolve()
        reject()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"udit",email:"udit@gmail.com"})
    },1000)

})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"lamba",password:"123"})
        }else{
            reject('ERROR Something went wrong')
        }
    },1000)
})
promiseFour.then((user)=>{
    console.log(user);

    return user.username
}).then((username)=>{
    console.log(username);

})

 