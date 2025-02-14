// Function Statement or Function Declaration

function a(){
    console.log("a called");
}

// Function Expression
var b = function(){
    console.log("b called");
}
a();
b();

// --> Anonymous Function
// function(){
        // gives a syntax error , because no Name..!!
// }

// Named Function Expression
var c = function xyz(){
    console.log("Named Function Expression");
}
c();
 // xyx(); // Gives a Error


// Difference b/w Parameters & Arguments
let d = function pA(para1, para2){// Parameters
    console.log(para1 + para2)
}
d(2, 4);// Arguments

// First Class Function 
var e = function (para1){
    return function jkl(){

    }
}
// function jkl(){

// };
console.log(e);

// Arrow Functions

