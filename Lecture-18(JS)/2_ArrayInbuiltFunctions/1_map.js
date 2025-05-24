/*
1) Map function returns an another array of same size by performing some operations
   on the original array and original array remains the same.
2) Filter function passes the selective elements from the original array to the
   resulting array which satisfies the given condition.
   i.e. size of the resultant array <= size of original array
3) Reduce function converts the whole array to a single value based on some
   operation provided by the user.
*/
let arr = [1,2,3,4,5];
let newarr = arr.map(function(val,indx,arr){
    return val*val;
})
console.log(newarr);


let newarr2 = arr.map((val,indx)=>{
    return 2*val;
})
console.log(newarr2);