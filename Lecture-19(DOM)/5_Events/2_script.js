let btn = document.querySelector('button');
let para = document.querySelector('.para');

btn.addEventListener('click',()=>{
    console.log("FIRST CLICKED")
})
btn.addEventListener('click',()=>{
    console.log("AGAIN CLICKED")
})
para.addEventListener('mouseenter',()=>{
    para.classList.add('mouse-enter');
})
para.addEventListener('mouseleave',()=>{
    para.classList.remove('mouse-enter');
})
//Here , both the above two statements will be printed on clicking the button