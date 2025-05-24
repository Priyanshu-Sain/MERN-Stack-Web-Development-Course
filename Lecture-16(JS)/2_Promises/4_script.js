let MovieCanDownload = false;
function DownloadMovie(url){
    return new Promise(function(resolve,reject){
        if(MovieCanDownload){
            resolve("Movie Downloaded");
        }
        else reject("The given url is not working ");
    })
}
//DownloadMovie ek function hai jo ki ek prmise return krta hai to is function ko call kro
//and jo bhi output hoga usko promise ki tarah treat karo
//Resolve and reject function only passes a single argument
DownloadMovie("myurl/hdmovies/animal.mp4").then(function(msg){
console.log(msg);
}).catch(function(msg){
console.log("Due to some reason" , msg);
});