let btn = document.querySelector('.btn');
//Click operation pe event add krna hai

btn.addEventListener('click',throttling((ev)=>{
    console.log("Clicked");
},2000))

function throttling(fun,delay){
    let initialTime = 0; //First event will be executed immediately as initialTime = 0
    return function(){
        if(new Date().getTime()-initialTime >= delay){
            initialTime = new Date().getTime();
            fun();
        }
        else console.log("Abhi pehle wala execute nhi hua hai");
    }

}