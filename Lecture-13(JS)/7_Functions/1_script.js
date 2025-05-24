// Syntax : function function_name(arguments)
function add(a,b){
    return a+b;
}
console.log(add(2,3));
//In JS , function is a data type also . So , we can store a function in a variable also
let x = function multiply(i,j){
    return i*j;
}

console.log(x(2,3));

//Since , we are invoking the function bybthe help of variable in which it is stored and
//we do not require the name of function to invoke it . So , we can eliminate the name if function
//like :
let welcome = function (name){
     return "Hii "+name;
}
console.log(welcome("Pranjal"));
//And , this type of functions are known as Anonymous functions