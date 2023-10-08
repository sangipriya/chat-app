//3.Sum of all numbers in an array

//Anonymous function:

//let array = [2,3,4,5];
/*let sum = function(num){
    let total = 0;
    for(let i=0;i<num.length;i++){
    total+=num[i];
    }return total;
};
console.log(sum(array));*/

//IIFE function(immediate invoke function)

//let array = [1,2,3,4,5,6];
(function(num){
    let total=0;
    for(let i=0;i<num.length;i++){
        total+=num[i];
    }console.log(total);
})([1,2,3,4,5]);

