let arr = [1,2,3,4,5];
let newarr = arr.filter((val,indx,arr)=>{
    return val%2==0; //Will pass only the even element of arr to newarr
})
console.log(newarr)