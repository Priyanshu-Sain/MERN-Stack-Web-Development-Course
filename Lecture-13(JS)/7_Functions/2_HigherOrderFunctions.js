/*
As numbers can be passed as arguments in a function and a number can be returned from a function
Therefore , since function is also a dataype , a function can be passed as argument
as well as can be returned from another function
The language which supports above statement is known as Language Supports Higher Order Functions

*/
//first :-
function outerfun(){
    //Declaring the inner function
    function innerfun(){
        console.log("Inside inner function");
        //This statement will not run at time of creating the inner fun
        //This will be run when innerfun is being invoked
    }
    return innerfun;
    //Here , outer fun is returning the inner fun

}
let a = outerfun();
console.log(a());

//2nd :-

function outerf(){
    function innerf(){
        console.log("INSIDE INNER FUNCTION");
        ///If no any return statement is written , function returns undefined by default.
    }
    return innerf(); //Here , innerf is being invoked first and innerf ka jo return aayga
                     //wo return kiya gya hai
}
let b = outerf();
console.log(b);

//Passing functions as arguments :-

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function doOperations(add,sub){
    console.log(add(10,20)); //Arguments me jo functions aaye unki help se apne
                             //operations kar diye
    console.log(sub(30,10));

}
doOperations(add,subtract); //Functions pass kardiye as arguments