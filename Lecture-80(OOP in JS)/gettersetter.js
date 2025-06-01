class User{
    constructor(name){
        console.log("Object is created");
        this.name = name
    }
    get name(){
        return this._name;
    }
    set name(value){
        //This runs when whether the already made object is renamed or the newly created
        // object is setting name.
        if(value.length <= 4) console.log("Nmae is too short");
        else{
            console.log("Changed successfully");
            this._name = value;
        }

    }
}
let u = new User("johnny");
console.log(u.name);