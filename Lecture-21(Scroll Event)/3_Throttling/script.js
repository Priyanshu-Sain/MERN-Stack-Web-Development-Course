let btn = document.querySelector('.btn');
//Click operation pe event add krna hai
function ClickKaFuntion(){
    console.log("Clicked");
}
btn.addEventListener('click',throttling(ClickKaFuntion,3000));
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