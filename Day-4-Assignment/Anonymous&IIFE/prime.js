Return all the prime numbers in an array using anonymous function and IIFE

 Using Anonymous fucntion.


let a=function(l,r){
    let arr=[];
    for(i=l; i<r;i++){

        arr.push(i)
    }

    arr=arr.filter((number)=>{
        for(let i=2; i<=Math.sqrt(number);i++){
            if(number%i===0)return false;
        }
        return true;
    })
    console.log(arr);
}
a(2,100);


Using IIFE function
(function(l,r){
    let arr=[];
    for(i=l; i<r;i++){

        arr.push(i)
    }

    arr=arr.filter((number)=>{
        for(let i=2; i<=Math.sqrt(number);i++){
            if(number%i===0)return false;
        }
        return true;
    })
    console.log(arr);
})(2,100);


