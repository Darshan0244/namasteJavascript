// Async await vs Promise.then/.catch
// Use Async await mostly for precise reading..!!

//1:07:01
const API_URL = "https://api.github.com/users/akshaymarch7";

// await can only be used insid an async function
async function handlePromise() {
    try{
        const data = await fetch(API_URL);
        const jsonValue = await data.json();
        console.log(jsonValue);
    }catch(err){
        console.log(err.message);
    }
}

handlePromise();



