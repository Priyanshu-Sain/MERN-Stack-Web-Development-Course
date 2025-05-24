
let navbar = document.querySelector('.navbar');
window.onscroll = (event)=>{
    if(window.scrollY > 500){
        navbar.style.backgroundColor = "orange"
    }
    else navbar.style.backgroundColor = "white"
}
// window.onscrollend = (event)=>{
//     alert("Scrolled Till End");
// }

//NEW CONCEPT STARTS FROM HERE :-



function scrollKaFunction(){
    console.log("scrolling");
}
window.addEventListener('scroll',debounce(scrollKaFunction,1000)); //Jab scroll event hoga , toh debounce function run hoga
function debounce(fun,delay){
    //Ye function ek dusra function return krega jisse ki ab scroll hone pe indirectly
    //wo returned function run hoga BUT , debounce k arguments me fun,delay hain
    //Toh jo returned function hoga wo apne sath apne closure me ye dono arguments leke jayega.
    let id;
    return function(){
        
        console.log("clearing element with id",id);
        clearTimeout(id);
        id = setTimeout(()=>{
            fun();  //fun() ke run hone pe humne limit laga di ki event hone k specified delay ke baad hi run hoga
            //Agar us delay se pehle hi dobara event fire hogya toh shuru se debounce function execute hoga without running the fun().
        },delay);
        console.log("creating new interval with id",id);
    }

}
/*
--> When multiple events are firing within a short duration of time , the CPU overloads,
    the browser slow down.
    Therefore , there are two ways to limit the frequency of firing the events on a webpage
1) Debouncing :- The event result occurs only once when there is a delay available after firing the event.
                 E.g. The event is fired 100 times rapidly and then there is a delay of required duration
                      then the event output will be displayed once.
2) Throttling :- In this method , next event firing output will be executed only when its previous event has been
                 executed completely.
                 E.g. The event is taking 2 seconds in executing and event is fired 100 times rapidly then,
                      first event execution takes 2 seconds and within that duration CPU will ignore further events firing.
                      Once , first event is executed , now CPU is available for capturing next Event Firing requests. 
*/
