let movie = document.querySelector('.movie');
let body = document.querySelector('body');
//1) Add Class
body.classList.add('theme-1');


//2) Remove Class
setTimeout(()=>{
    body.classList.remove('theme-1');
},3000)


//3) Toggle :- If class is present , then remove it . Else , add the class
setInterval(() => {
    body.classList.toggle('theme-1');
    
}, 3000);
