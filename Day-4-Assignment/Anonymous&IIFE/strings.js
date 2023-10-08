2)Convert all the strings to title caps in a string array
anonymous function

let my=function(str){
    let arr=[]
    str=str.toLowerCase().split(" ");
    //console.log(a)
for(let i=0;i<=str.length;i++){
  arr.push(str[i].charAt(0).toUpperCase() + str[i].slice(1));
  return console.log(...arr) ;
 
}

};

(my("MYSELF"));

//IIFE function(immediate invoke function)

(function (str) {
  let arr=[]
  str=str.toLowerCase().split(" ");
  //console.log(a)
for(let i=0;i<=str.length;i++){
arr.push(str[i].charAt(0).toUpperCase() + str[i].slice(1));

return console.log(...arr);

}
})("MYSELF")
