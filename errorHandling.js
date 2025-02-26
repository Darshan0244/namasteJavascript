const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart); // orderId
console.log(promise);

// A Promise Chain..!!!
promise.then(function(orderId){
    console.log(orderId);
    return orderId;
})
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function(err){
    console.log(err.message);
})// Error Handling
.then(function(orderId){
    console.log("After Catch..!!");
})
// 
function createOrder(cart){
    const pr = new Promise(function(resolve, reject){
        // createOrder
        // validateCart
        // orderId
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid");
            reject(err);
        }
        // logic for createOrder
        const orderId = "12345";
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            }, 5000);
        }
    });
    return pr;
}

function proceedToPayment(orderId){
    ///
    return new Promise(function(resolve, reject){
        resolve("Payment Successful");
    });
}

function validateCart(cart){
    return true;
}



