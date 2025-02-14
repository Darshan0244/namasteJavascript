// 1 => Map() Function
const arr = [5, 1, 3, 2, 6];

// Double - [10, 2, 6, 4, 12]
function double(x){
    return x * 2;
}
// Triple - [15, 3, 9, 6, 18]
function triple(arr){
    return arr * 3;
}
// Binary - ["101", "1", "11", "10", "110"]
function  binary(x){
    return x.toString(2);
}

const output = arr.map(binary); // map

console.log(output);

// ================================

// 2 => Filter() Function

const arr2 = [5, 1, 3, 2, 6];
// checking isOdd
function isOdd(x){
    return x % 2 === 1;
}
// checking isEven
function isOdd(x){
    return x % 2 === 0;
}
// return arr >= 2
const output2 = arr2.filter((x) => x >= 2 );
console.log(output2);


// reduce() in diff file..!!

