// 3 => Reduce() Function
const arr = [5, 1, 3, 2, 6];

// to find sum of arr using Reduce()

const output = arr.reduce(function (acc, curr){
    acc = acc + curr;// curr(current) is the current value of an Array
    return acc; // acc -> accumulator acts as sum
},0);

console.log("Sum of the Array is : "+output); // 17 is the Output

// to find max value in an Array using reduce()
const output2 = arr.reduce(function(max, curr){
    if(curr > max){
        max = curr;
    }
    return max;
},0);

console.log("Max value is : "+output2);

