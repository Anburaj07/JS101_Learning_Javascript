let num=1234;
let x=num;
let b,sum=0;
while(num>0){
  b=num%10;
  sum=sum*10+b;
  num=Math.floor(num/10);
}sum;
if(x==sum){
  console.log("Yes");
}
else{
  console.log("No");
}