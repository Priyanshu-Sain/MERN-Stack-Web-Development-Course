/* Variables are having functional scope in javascript */
function fun(){
    console.log(x);
    var x = 10;
    console.log(x);
}
fun();
for(var i=0; i<10; i++){

}
console.log(i);
console.log(x);
/* EXPLANATION :-
                  1) Var x apne function me hoist ho jayga and shuru me undefined value 
                  hogi uske andar then line 4 me 10 assign ho jayga
                  2) Var i apne scope me hoist hoga and undefined value assign hogi shuru
                  me then using for loop i becomes 10 at the end 
                  3) Printing x will give error because x is not defined in the global scope
                  as it was declared in the function fun().
*/
