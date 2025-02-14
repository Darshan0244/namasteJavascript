const radius = [3, 1, 2, 4];

// Calculate area of Circle
const area = function(radius){
    return Math.PI * radius * radius;
}
// Calculate circumference of Circle
const circumference = function(radius){
    return 2 * Math.PI * radius ;
}
// Calculate area of Circle
const diameter = function(radius){
    return  2 * radius;
}

const calculate = function(radius, logic){
    const output = [];
    for(let i = 0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
};

console.log(calculate(radius, area)); 
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));
