let itemlist = document.querySelectorAll('.item')
itemlist.forEach((item) => {
    item.addEventListener('click',() =>{
        console.log(item.innerText);

    })
    
});
/*
Upar se item class ki sabhi li elements ko select kr liya and sabpe event listener 
add kardiya BUT
ab agar new element koi add krte hain by JS , toh ye eventListener uspe applied nhi
milega
SO , Event Delegation introduced here.
By event delegation , addEventListener is applied to the parent instead of its children
But , how to know that which child we selected ? Ans :- By target
*/
let container = document.querySelector('.container');
let i = 8;
let child = document.createElement('li');
child.classList.add('item');
child.innerText = i;
i++;
container.appendChild(child);


//By applying event to the parent :-

container.addEventListener('click',(event)=>{
    let item = event.target;
    console.log(item.innerText);
})