// promise.allSettled() APIs
// 
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P1 Sucess"), 3000);
});

const p2 = new Promise((resolve,reject) =>{
    setTimeout(() => resolve("P2 Sucess"), 1000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P3 Fail"), 2000);
});

Promise.allSettled([p1, p2, p3]) 
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
