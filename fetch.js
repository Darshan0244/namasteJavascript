console.log("Start");

setTimeout(function cbT(){
    console.log("CB SetTimeout");
},5000);
/*
fetch("https://api.netflix.com").then(function cbF(){
    console.log("CallBack Netflix");
});
*/
console.log("End");


