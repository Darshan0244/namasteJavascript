console.log("Start of Code");

setTimeout(function cb(){
    console.log("CallBack..!");
},0);

console.log("End of Code..!!");

// million
let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate + 10000){
    endDate = new Date().getTime();
}

console.log("While Date Expires");

