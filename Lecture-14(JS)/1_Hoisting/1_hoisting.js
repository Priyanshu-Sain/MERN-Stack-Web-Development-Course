/*
Hoisting means the property of functions and variables to go to the top of the file
. OR , Before the execution of the code , the code is parsed once in javascript
and hoisting is done to put all the functions and variables declaration at the top of
the program and execution takes place thereafter
NOTE : While hoisting the variables , only the declaration of variables is hoisted
       and not the initialisation
*/


//1:-
console.log(add(2,3))


function add(a,b){
    return a+b;
}
//Function declaration is below the function access and it is working due to the
//hoisting of the function

//2:-
console.log(x); //This will give undefined because x ek var hai ye to hoisting ne bta diya
//par value assignment hoisting se nhi hota
var x = 10;
console.log(x); //This will give 10 output