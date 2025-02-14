// Map() with tricky problem

const users = [
    { firstName: "akshay", lastName: "saini", age: 26},
    { firstName: "donald", lastName: "trump", age: 75},
    { firstName: "Tiger", lastName: "shroff", age: 26},
    { firstName: "Elon", lastName: "musk", age: 50},
];
// list of full names
// using map() 
const output = users.map((x) =>x.firstName+ " " + x.lastName);

console.log("List of full Names : "+output);

// To give the result of no of occurance of age
// using reduce()
// acc -> accumulator | curr -> current
const output2 = users.reduce(function(acc, curr){
     if(acc[curr.age]){
        acc[curr.age]++;
     }
     else{
        acc[curr.age] = 1;
     }
     return acc;
}, {} );
 
console.log(output2); // { '26': 2, '50': 1, '75': 1 }

// List whose age is < 30 using Filter() and map()
/* 
const output3 = users.filter( (x) => x.age < 30)
.map((x) => x.firstName); */

// using reduce()
const output3 = users.reduce(function(acc, curr){
    if(curr.age < 30){
        acc.push(curr.firstName);
    }
    return acc;
}, [] );

console.log("Age less than 30: ");
console.log(output3);