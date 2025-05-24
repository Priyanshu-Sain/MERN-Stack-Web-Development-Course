let btn = document.querySelector('button');
let para = document.querySelector('.para');
btn.onclick = ()=>{
    console.log(btn);
}
btn.onclick = ()=>{
    console.log("Kya haal hai bhai ke..."); //Here , this second command will be the output
    //and this has an alternative by which all the commands on a single action
    //will be applied.
    //This alternative is 'addEventListener'
}
para.onmouseenter = ()=>{
    para.classList.add('mouse-enter');

}
para.onmouseleave = ()=>{
    para.classList.remove('mouse-enter');
}