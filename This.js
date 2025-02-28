"use strict";
// this in global space
console.log(this); // globalObject - window, global

// this inside a function
function x() {
    // the value depends on strict / non strict mode
    console.log(this);
}
x();

// this inside in non-strict mode - (this substitution)

// If the value of this keyword is undefined or null
// this keyword will be replaced with globalObject
// only in non strict mode


// this keyword value depends on how this is called (window)
x(); // undefined
window.x(); // window

// this inside a object's method
const student = {
    name: "Darshan",
    printName: function(){
        console.log(this.name);
    }
}
student.printName();

const student2 = {
    name: "Deepika",
};
student.printName.call(student2);
// call, apply, bind methods (sharing methods)


// this inside arrow function
const obj = {
    a: 10,
    x: () => {
        console.log(this);
    }
};
obj.x();

// this inside nested arrow function
const obj2 = {
    a: 20,
    x: function () {
        // enclosing lexical context
        const y = () => {
            console.log(this);
        };
        y();
    },
};
obj2.x();

// this inside DOM elements => Reference to the HTML element..!!

