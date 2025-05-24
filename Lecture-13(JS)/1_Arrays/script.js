//ARRAYS IN THE JS ARE LIKE DOUBLY LINKED LIST WHERE INSERTION AND DELETION IS POSSIBLE AT FRONT AND END BOTH SIDES

var arr = [1,2,'HELLO',true];
console.log(arr);
arr.push('luu');
arr.unshift(342);
console.log(arr);
arr.shift();
console.log(arr);

//FOR OF LOOP :-
for(let i of arr){
    console.log(i);
}

//Searching key
let ans = arr.indexOf("HELLO");
console.log("Index: ",ans);