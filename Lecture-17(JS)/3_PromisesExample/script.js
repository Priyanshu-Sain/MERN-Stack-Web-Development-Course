function download(url){
    return new Promise(function(resolve,reject){
        console.log("DOWNLOADING STARTS")
        setTimeout(function(){
            let extension = url.split('.').pop();
            console.log("DOWNLOADING COMPLETED")
            if(['jpg','png','jpeg'].indexOf(extension) != -1){
                let img = url.split('/').pop();
                resolve(img)
            }
            else reject("Provide the right URL");

        },3000)
    })
}
function compress(file){
   
    return new Promise(function(resolve,reject){
        console.log("COMPRESSION STARTS")
        setTimeout(function(){
            
            let compressedimg = file.split('/').pop().split('.')[0]+'.zip';
            console.log("COMPRESSION DONE , " , compressedimg);
            resolve(compressedimg);

        },2000)

    })

}
function upload(file){

    return new Promise(function(resolve,reject){
        console.log("UPLOADING STARTS")
        setTimeout(function(){
            console.log("UPLOADING DONE")
            let newlink = "https:google.com/uploaded/photos/zipfiles";
            resolve(newlink);

        },2000)

    })


}
/*Jo upar wale function ka resolve return krega...wo argument uske neeche wale .then()
  me jo function h uske argument me chla jata h automatically.
  So , there is no need of returning of another promise inside the .then() , 
  just write another .then() function below the current one and it is understood
  that upar wale se jo resolve return me dega whi aayga neeche wale me
*/
download("https:google.com/images/sunflower.jpg").then(function(img){
  //  console.log(img);
    return img; //Agar ye return nahi bhi likha hota to that will be okay.
})
.then(compress)
.then(upload)
.then(function(newlink){ //Yaa to kisi function ka naam likh skte the usme chli jati argument
    // OR just define a function here itself 
    console.log("The file has been compressed and uploaded to the new link : ",newlink);
})
.catch(function(err){
    console.log(err);

})
/*
--> Now ,here a sequential flow of tasks is being performed with asynchronous 
    programming and most importantly we did it without nesting of functions
--> So , the nesting part has been eliminated which was occuring in case of CallBacks
*/