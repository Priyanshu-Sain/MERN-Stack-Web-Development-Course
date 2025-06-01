async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(45);
        },1000)
    })
}
(async function main(){
    let a = await sleep()
    console.log(a)
    let b = await sleep()
    console.log(b);

})()
//An IIFE (Immediately Invoked Function Expression) in JavaScript is a function that 
//is defined and executed immediately after its creation.Here , main function is IIFE
// So the IIFE is just a clean, automatic way to run async code immediately, like a 
// "main" function in other languages.
