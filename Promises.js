// Important Topic...

const cart = ["shoes", "pants", "kurta"];

createOrder(cart, function(){
    proceedToPayment(orderId);
}); //orderId


// Promise Chain
const promise = createOrder(cart);

promise.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function (paymentInfo){
    return showOrderSummary(paymentInfo);
})
.then(function (paymentInfo){
    return updateWalletBalance(paymentInfo);
});



promise.then(function (orderId){
    proceedToPayment(orderId);
});


const GITHUB_API = "https://api.github.com/users/akshaymarch7";

const user = fetch(GITHUB_API);

console.log(user);// promiseState : Fulfilled

// user.then(function(data){
//     console.log(data);
// })

// NOTE: A Promoise is in one of these states:



// PROMISE : : A Promise ia an object representing the eventual 
//                    completion of an asynchronous operation..!!

// 1 - Pending: initial state, neither fulfilled nor rejected.
// 2 - Fulfilled: meaning that the operation was completed sucessfully.
// 3 - rejected: meaning that the operation failed.


