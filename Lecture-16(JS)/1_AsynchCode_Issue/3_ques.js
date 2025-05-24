function download(cb){
    console.log("Downloading Starts");
    setTimeout(function(){
        console.log("Downloading Completed");
        cb(upload);


    },2000)

}


function compress(cb){
    console.log("Compressing the File");
    setTimeout(function(){
        console.log("Compressing Done");
        cb();
    },2000)

}

function upload(){
    console.log("Uploading Starts");
    setTimeout(function(){
        console.log("Uploading Completed");
    },2000)

}

download(compress);