/*IMPORTANT TOPIC
-->Definition :- It is a mechanism by which an inner function can "close over" 
   variables defined in its outer function, preserving them for later use.
                               OR
-->If a variable is declared in a parent function and it is being accessed in its child
   function(obviously it can) and suppose the parent function returns the child function.
   Then jo parent function k bahar variable hai agar usme child function store ho gya
   , toh jo child function variable access kar rha tha parent ka wo ab kaise kar payega?
   This mechanism is handeled by the Closures.
   i.e.

   function parent(){
     var x = 10;
     function child(){
       console.log(x);
     }
       return child;
   }
   var f = parent();     Here , child function is assigned to var f
   f();   Now , here it will try to print the var x which belongs to parent function

-->   WHAT ARE CLOSURES AND HOW THEY HANDLE PROBLEM STATED ABOVE ?
ANS:- When a child function is being returned by a parent function , then the child
      function also takes all the buckets of parent scope with it inside an anonymous object
      called as "CLOSURE".

*/
