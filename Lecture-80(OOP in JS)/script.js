/*let animal = {
    eats: true
}
let rabbit = {
    jumps: true
}
//Now we can inherit object animal in object rabbit by adding it to the prototype of rabbit.
rabbit.__proto__ = animal;
console.log(rabbit);

*/
class Animal{
    constructor(name){
        this.name = name;
        console.log("Object is created");
    }
    eats(){
        console.log("eating")
    }
    runs(){
        console.log("running");
    }
}
let a = new Animal("tommy");
console.log(a);

class Rabbit extends Animal{
    constructor(name){
        console.log("Inside rabbit constructor");
        //This will give error. To get rid of it, super class constructor should also
        //be invoked by super(); i.e.:-
        super(name);
    }
    jumps(){
        console.log("jumping");
    }
}
let r = new Rabbit("Khargosh");
console.log(r);
/*
Method Overriding :- The method/function can be overridden in the derived class with
a change in its definition keeping the function name same.
*/