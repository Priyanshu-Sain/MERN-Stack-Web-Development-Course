let a = prompt("Enter the first number")
let b = prompt("Enter the second number")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("This syntax is not allowed"); //Errors definition dii h
}
let sum = parseInt(a)+parseInt(b)
console.log("The sum is", sum);
//console.log(sum*x); //Here x is not defined and will throw a error. So, to handle the error
//use the try-catch-finally method
//Try just checks the execution throws error or not . If yes, catch runs. Otherwise try runs
//Finally runs after try/catch . It also runs if the function returns from try/catch.

//i.e.
try {
    console.log(sum*x);
} catch (error) {
    console.log("Its an error");
}
finally{
    console.log("Done");
}