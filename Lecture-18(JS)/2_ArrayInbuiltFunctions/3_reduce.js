let arr = [1,2,3,4,5];
let sum = arr.reduce((acc,val)=>{
    return acc+val;
})
console.log(sum);
/*
-->Accumulator stores arr[0] and val has arr[1] initially.
-->Then arr[0]+arr[1] gets stored in accumulator and val will have arr[2] and so on..
-->The final result will be stored in the accumulator and assigned to variable sum.
-->If we want to give accumulator an initial value and give arr[0] to val initially
   , then initial value is assigned to accumulator and syntax is slightly changed.
*/

//By initial value :-
let sum1 = arr.reduce((acc,val)=>{
    return acc+val;
},1)
console.log(sum1);