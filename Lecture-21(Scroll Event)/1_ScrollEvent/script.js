let body = document.querySelector('body');
window.onscroll = (event)=>{
  //  console.log(event);
  //  console.log(window.scrollY)
  if(window.scrollY < 300) console.log("On first page");
  else console.log("On second page");
}
let navbar = document.querySelector('.navbar');
window.onscroll = (event)=>{
    if(window.scrollY > 500){
        navbar.style.backgroundColor = "orange"
    }
    else navbar.style.backgroundColor = "white"
}
window.onscrollend = (event)=>{
    alert("Scrolled Till End");
}