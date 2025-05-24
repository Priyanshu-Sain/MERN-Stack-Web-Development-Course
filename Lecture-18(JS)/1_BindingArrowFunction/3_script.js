function hello(){

    console.log(this);

    let world =()=>{
        console.log(this);
    }

    world()
}

let person = {
    name : "Chandan",
    age: 20
}


hello.call(person);