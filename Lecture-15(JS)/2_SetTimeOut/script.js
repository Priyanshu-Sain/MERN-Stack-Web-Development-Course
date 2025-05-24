/*
setTimeout() is a function of the browser which allows the multiple threading concept in
JavaScript . 
The JS code will run in the parallel while the delay happens and gives output once
the JS thread executes completely and call stack gets empty.
*/
setTimeout(function(){
    console.log("Hello World");
},5000) // 5000 miliseconds k delay k baad ye function call hoga
//But , the below JS code will not freeze , it will be executed meanwhile
console.log('HII');
console.log("Bye");
console.log("Tata");