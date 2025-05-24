function parent(){
    var x = 1;
    function child(){
       x++;
       console.log(x);
    }
      return child;
}

var f = parent(); //child function assigned
var f1 = parent();//child function assigned with a new closure
f(); // x = 1-->2
f(); // x = 2-->3
f(); // x = 3-->4
f1(); // x = 1-->2
f1(); // x = 2-->3

/*
Agar ek aisa function call hua hai jiske pass already khud ka closure hai
toh , further jo closures bnenge/bnega usme present wale closures ke variables nhi honge
koi bhi alag ho skte hain

*/