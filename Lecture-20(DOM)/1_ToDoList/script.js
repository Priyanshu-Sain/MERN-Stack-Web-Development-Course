let btn = document.querySelector('.btn');
let list = document.querySelector('.tasklist');
let inp = document.querySelector('.inp');

btn.addEventListener('click',()=>{
    let ch = document.createElement('li');
    let name = inp.value;
    // Jo input liya hai wo content is child me daalo
    ch.innerText = name;
    ch.classList.add('task-item');
    ch.innerHTML +=  `<button class = "up-btn">&#x2B06;</button>  
    <button class = "down-btn">&#x2B07;</button>
    <button class = "cross">X</button>`
    list.appendChild(ch);
    inp.value = ""


})

//Adding event to the list parent for its children by event delegation
list.addEventListener('click',(event)=>{
    let item = event.target;
    //we can identify if a specific class is present in an item or not by :- classList.contains()
    if(item.classList.contains('up-btn')){
      //  console.log('up clicked');
      let parentElement = item.parentElement;
      let prevElement = parentElement.previousElementSibling;
      //Syntax of insertBefore :- parentDiv.insertBefore(targetNode,JiskePehleInsertKrniHaiWoWaliNode)
      list.insertBefore(parentElement,prevElement);

    }
    else if(item.classList.contains('down-btn')){
      let parentElement = item.parentElement; //Jo li select kiya h us li element ko point krega
      let nextElement = parentElement.nextElementSibling;
      list.insertBefore(nextElement,parentElement); //All li's ka parent 'list' hai to usi pe lgta hai insertbefore function.
        
    }
    else if(item.classList.contains('cross')){
      let parentElement = item.parentElement;
      parentElement.remove(); //Ye ek li item hi delete krna h bss
        
    }
})