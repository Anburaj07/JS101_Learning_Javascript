//Print Prime Numbers from 1 to given limit
let n=15;
let count=0;
let flag=false;
let s=""
for(let i=1;i<=n;i++){
  // let s=""
 if(n%i==0){
   flag=true;
   s=s+i+" "
 }
}if(flag){
  console.log(s)
}