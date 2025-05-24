/*
Now , by the rule of hoisting only the declaration of variables , there is an important
example we need to take look at
*/


sayhello("Kunal");  //Will give error

var sayhello = function(name){
    console.log("HII",name);
}
sayhello("Kunal");

/*Here , sayhello hoist ho gya and program ko bta diya ki sayhello ek var hai
But uske andar ek function assigned hai ye to nhi pta abhi..
Ye assigned wali cheej line 9 pe hi pta chlegi program ko
That's why , ek simple var ko as a function ki trh treat krke usme argument pass nhi
kr skte and it will give error
*/
