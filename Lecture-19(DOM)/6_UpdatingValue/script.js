let reduce = document.querySelector('.reduce');
let update = document.querySelector('.update');
let counter = document.querySelector('.counter-number');


reduce.addEventListener('click',()=>{
    counter.innerText = Number(counter.innerText)-1;

})
update.addEventListener('click',()=>{
    counter.innerText = Number(counter.innerText)+1;

})