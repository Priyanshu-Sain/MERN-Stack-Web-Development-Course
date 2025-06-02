//Storing the item in local storage
localStorage.setItem("username","Priyanshu Sain");
//Accessing the items
let user = localStorage.getItem("username");
console.log(user)

//Storing the objects in LS
let obj = {
    Name:"Priyanshu_Sain",
    Age:21
}
localStorage.setItem("object",JSON.stringify(obj));
//Accessing the string stored to object from LS
const output = JSON.parse(localStorage.getItem("object"));
console.log(output.Name,output.Age)
