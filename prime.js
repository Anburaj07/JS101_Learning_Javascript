let n=17;
let count=0;
for(let m=1;m<=n;m++){
  if(n%m==0){
    count=count+1;
  }
}
if(count==2){
  console.log("p")
}
else{
  console.log("np")
}