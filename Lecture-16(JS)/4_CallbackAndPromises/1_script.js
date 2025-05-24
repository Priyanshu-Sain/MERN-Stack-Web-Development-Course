//USING PROMISES CONCEPT :-
let MovieCanDownload = false;
function DownloadMovie(url){
    return new Promise(function(resolve,reject){
        if(MovieCanDownload){
            resolve("Movie Downloaded");
        }
        else reject("The given url is not working ");
    })
}

DownloadMovie("myurl/hdmovies/animal.mp4").then(function(msg){
console.log(msg);
}).catch(function(msg){
console.log("Due to some reason" , msg);
});

//USING CALL BACK FUNCTIONS
let MovieCanDownload2 = false;
function DownloadMovie2(url , cb){
    if(!MovieCanDownload2) throw new Error("Not Downloaded");
    else{
        setTimeout(function(){
            cb("Downloaded");
        },2000)
        
    }
}
DownloadMovie2("myurl/movies/animal" , function(ans){
    console.log(ans);
})