/*
1) Resolve function is defined in the .then() function
2) We can call resolve first then define it later OR we can define resolve first and call it later
Example of both the cases are shown below :-
*/
//First defined ,  then called

/*let p = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("RESOLVE IS RUNNING");
    },5000); //5 seconds baad call hoga
})
p.then(function(data){ //immediately called
    console.log("RUNNING THEN FUNCTION")
    console.log(data);
}).catch(function(msg){
    console.log(msg);
})
*/
//First called and then defined
let p = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("RESOLVED");
    },3000);
})
p.then(function(msg){
   console.log(msg);
}).catch(function(err){
    console.log(err);
})