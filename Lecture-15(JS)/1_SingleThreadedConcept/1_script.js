/*
-->Javascript is a single threaded language that is tasks are done one by one according
to the call stack.
--> If there is some delay or some time consuming task performing , then javascript
    thread gets blocked and other tasks can't be performed . So , a solution is needed
    to do the other tasks of the JS thread by keeping the JS thread free
    This solution is done by the Asynchronous Programming
--> There are mainly two functions to do asynchronous coding. i.e. set time out and
    set Interval.
    In this , JS uses the browser to support multithreading and hence developer requires
    the access of the browser.
--> Now , giving fully access of browser will not be safe so some restrictions should be applied'
    Therefore , API came into role.
--> API :- Application Programming Interface . This interface provides the access of browser
           to the developer in the form of an object to perform only legal and allowed 
           tasks.
--> Working behind the setTimeOut function :
    1) All those tasks which takes some time or which cause any delay are passed to
       the Web API or the browser so that JS thread do not get blocked.
    2) After execution of these tasks , they goes to the call back queue and wait
       for the Call Stack to get empty.
    3) When the Call Stack is empty , these functions gets loaded to the call stack
       and executes the output.
    * The task to check whether the Call Stack is empty or not and to load 
      the functions from call back queue to call stack when it is empty, is performed
      by the "Event Loop".
    * When the functions are waiting in the Call back Queue , there will be some JS
      code may be present in the call stack. So , even if their delays time get over
      But they can't be loaded in the Call Stack without getting it empty
      Therefore , the delay can be more than the desired value of delay due to JS
      thread running in the parallel.
*/
function delayonesec(){
    let currentTime = new Date().getTime();
    while(new Date().getTime()-currentTime < 1000){

    }
}
function delaynsec(n){
    for(let i = 0; i<n; i++){
        delayonesec();
    }
}
delaynsec(5);
console.log("Hii there"); //This statement will be run when call stack gets empty
//from the above code . i.e after completion of the delay of n seconds due to single threaded
