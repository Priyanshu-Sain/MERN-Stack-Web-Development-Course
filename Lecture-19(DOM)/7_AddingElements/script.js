let btn = document.querySelector('.button');
let list = document.querySelector('.movie-list');

let movies = ["Animal",
              "Singham",
              "Money-Heist",
              "PaatalLok",
              "Avengers"
]
let i = 0;


btn.addEventListener('click',()=>{
    if(i < movies.length) list.innerHTML += `<li>${movies[i]}</li>`
    else if(i == movies.length){
        let url = "https://i.etsystatic.com/26617198/r/il/376bd2/2813504579/il_fullxfull.2813504579_90rq.jpg";
        list.innerHTML += `<li><img src=${url}></li>`

    }
    i++;

})