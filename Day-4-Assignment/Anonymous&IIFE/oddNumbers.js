Anonymous function

let my =function (a){
    
for (let i=0;i<=a.length;i++){
    let arr=[]
        if(a[i]%2!=0){
 
           arr.push(a[i])
console.log(arr);
        }
        
    }
}

my([1,2,3,4,5]);

IIFE function(immediate invoke function)
(function (a){
    
    for (let i=0;i<=a.length;i++){
        let arr=[]
            if(a[i]%2!=0){
                
    arr.push(a[i])
                console.log(arr);
            }
            
        }
    })([1,2,3,4,5])

