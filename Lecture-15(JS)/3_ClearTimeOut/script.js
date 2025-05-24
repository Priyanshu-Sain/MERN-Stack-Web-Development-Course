let id = setTimeout(function(){
    console.log("Hello world");
},5000);
console.log("Hii there");
//clearTimeout(id);
setTimeout(function(){
    clearTimeout(id);
},4000);



let id1 = setTimeout(function(){
    console.log("inside id1")
    let id2 = setTimeout(function(){
        console.log("inside id2")
    },5000)
    clearTimeout(id2);
},2000)
console.log("inside main")


let id3 = setTimeout(function(){
    console.log("scooby dooby doo")
},5000,setTimeout(function(){
    clearTimeout(id3)
},2000))