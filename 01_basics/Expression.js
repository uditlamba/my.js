//Immediately Invoked function Expression(IIFE)


//name IIFE
(function chai(){
    console.log('DB CONNECTED');
})();



// ()()  first function diffenetion and second is execution
// dur to global scop problem we use it


//Simple IIFE
((name)=>{
    console.log("BE CONNECTED TO",name);
})("udit");

