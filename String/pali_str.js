let str="LooL";
let s="";
    for(let i=str.length-1;i>=0;i--){
        s=s+str[i];
    }
    if(s==str){
        console.log("Yes");
    }
    else{
        console.log("No");
    }