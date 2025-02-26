const cart = ["shoes", "pants", "kurta"];
// Example of an CallBack Hell...!!!
api.createOrder(cart, function(){

    api.proceedToPayment(function() {

        api.showOrderSummary(function(){

            api.upadteWallet();

        })

    })

})

// NOTE :- 
/* 
0. Importance of Callbacks :- Asyncronus in Javascript exist because of CallBack..!!
1. Issues with Callbacks
a. Callback Hell
b. Invension of Control
*/

