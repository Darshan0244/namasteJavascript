/* 
 * What is async ?
 * What is await ?
 * How async await works behind the scenes ?
 * Examples of using async/await
 * Error Handling
 * Async await vs Promise.then/.catch
 */  

const promise1 = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve("Promise Resolved Value.!  1\n");
    }, 5000);
});

const promise2 = new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve("Promise Resolved Value.! 2");
        }, 10000);

});

// NOTE:- Async & Await is used to handle Promises.!

// Async function always returns a Promise..!!!
async function getData(){

    console.log("Hello World.!");

    const val1 = await promise1; // Await is a Keyword that can be only be used inside a Async Function.!
    console.log("Namaste World.!");
    console.log(val1);

    const val2= await promise2; // Await is a Keyword that can be only be used inside a Async Function.!
    console.log("Namaste World.!");
    console.log(val2);
}

getData();


// const dataPromise = getData();
// dataPromise.then((res) => console.log(res));




