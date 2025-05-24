//Objects are like hashmaps
let obj = {
    'Hi Sir' : 'Greetings',
    'ab' : 'a', //Values me koi char aayga to string bnana pdega
     1 : 'Number',
     b : 2,
     a : 1 //Keys me char bina string k daal skte hain
};
console.log(obj.b);
console.log(obj.a);
console.log(obj['Hi Sir']);

//For in loop  (ONLY FOR OBJECTS)
for(let k in obj){
    console.log(k,":",obj[k]);
    // console.log(':');
    // console.log(obj[k]);
}