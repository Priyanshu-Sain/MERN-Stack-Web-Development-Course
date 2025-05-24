/*
Promise returns another promise in its .then() function
*/
let p = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("Hello");
    },2000);
})
p.then(function(msg){
    console.log(msg);
    return "World"; //This promise returns another promise

}).catch(function(err){
    console.log(err);

}).then(function(newmsg){  //The another returned promise is captured here 
    console.log(newmsg);
}).catch(function(newerr){
    console.log(newerr)
})
//We can see that every prmise has its own then and catch function BUT we can assign 
//only one catch function to all the promises like:-
p.then(function(msg){
    console.log(msg);
    return "World"; //This promise returns another promise

}).then(function(newmsg){  //The another returned promise is captured here 
    console.log(newmsg);
}).catch(function(newerr){
    console.log(newerr)
})