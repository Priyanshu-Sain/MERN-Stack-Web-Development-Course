let btn = document.querySelector('.button');
let list = document.querySelector('.movie-list');
let i = 0;
let movies = ["Avengers",
              "Sholay",
              "Hindi-Medium",
              "Street-dancer",
              "Animal"
]
btn.addEventListener('click',()=>{
    if(i < movies.length){
        let child = document.createElement('li');
        child.innerText = movies[i];
        list.appendChild(child);

    }
    else if(i == movies.length){
        let pic = document.createElement('img');
        pic.setAttribute('src',"https://i.etsystatic.com/26617198/r/il/376bd2/2813504579/il_fullxfull.2813504579_90rq.jpg");
        list.appendChild(pic);

    }
    i++;
})
// THIS METHOD WILL ONLY UPDATE THE CHILD APPENDED AND TAKES O(N) FOR ADDING N CHILDREN