// promise.any() APIs
// Gives the result of 1st Settled Success
// NOTE:- if all r rejected then it will give an aggregate error..!!!

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P1 Fail"), 3000);
});

const p2 = new Promise((resolve,reject) =>{
    setTimeout(() => reject("P2 Fail"), 1000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P3 Fail"), 2000);
});

Promise.any([p1, p2, p3]) 
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err.errors);// err.errors => to get Aggregate Error..!!!
})
