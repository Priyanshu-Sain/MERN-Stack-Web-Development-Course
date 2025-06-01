//This is destructuring of array 
let [a,b,...rest] = [1,2,3,4,5];
console.log(a);
console.log(b);
console.log(rest);

//Destructuring of object:-
    let obj= {
    p:1,
    q:2
}
let {p,q} = obj;  //Variables name should be same
console.log(p,q);

//Spread Operator:-
function sum(a,b,c){
    return a+b+c;
}
let arr = [1,2,3];
console.log(sum(...arr)) //This (...) spreads the arr


//Hoisting in JavaScript is the behavior where variable and function declarations are
// moved to the top of their scope before code execution.
//E.g: If a variable is called before its declaration but both are in the same scope
//then it will give the value undefined BUT Not the error of undeclared variable.

