let my=(str)=>{

str=str.toLowerCase().split(" ")
let arr=[]
for(let i=0;i<=str.length;i++){
    arr.push(str[0].charAt(0).toUpperCase()+str[i].slice(1))

    return (console.log(...arr));
}

}
my("SANGEETHA")