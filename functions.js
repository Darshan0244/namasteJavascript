function x(){
    let a = 10;
   return function y(){
        console.log(a);
    }

}
var z = x();
console.log(z);

z();
