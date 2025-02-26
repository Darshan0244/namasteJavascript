// promise.race() APIs
// Gives the result of 1st Settled Promise either Fulfilled or Failure
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P1 Sucess"), 3000);
});

const p2 = new Promise((resolve,reject) =>{
    setTimeout(() => reject("P2 Fail"), 1000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P3 Fail"), 2000);
});

Promise.race([p1, p2, p3]) 
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.error(err);
})
