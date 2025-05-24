let btn = document.querySelector('button');
let ul = document.querySelector('ul');

function getData(url){
    return new Promise((resolve,reject)=>{ //Ye promise hum create kar rhe hain , toh iski resolve() and reject() function calls hongi
        fetch(url) //Ye promise humne bnaya nhi hai , ye ek promise return kar raha hai to iska .then() and .catch() lgana pdega
        .then((res)=>{
            return res.json() //This .then() function is for the fetch.
        })
        .then((data)=>{ //Again .then is applied because parsing is done asynchronously and upar wala res.json() is returning a promise.
            resolve(data);
        })
        .catch((err)=>{
            reject(err);
        })
    })
}

btn.addEventListener('click',()=>{
    getData('https://cat-fact.herokuapp.com/facts')
    .then((data)=>{
        //Object ki array stored hai data me
        ul.innerText = ""; //Dobara click hone pe pehla content gayab hoke naya content aa jaye isliye kiya ye
        data.forEach((d)=>{
            let child = document.createElement('li');
            child.innerText = d.text;
            ul.appendChild(child);
        })
    })
    .catch((err)=>{
        console.log(err);
    })
})