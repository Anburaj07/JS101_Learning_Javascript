let n=3;
let k=10;
let y=5;
let x=1;
let z;
let sum=0;
for(x;x<=k;x++){
  z=n*x;
  if(z%y==0){
    sum=sum+z;
  }
}console.log(sum);
