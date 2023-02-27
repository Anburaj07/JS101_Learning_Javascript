// Use the same function to print Non-Primes from 2 to a given limit

  function prime(a){
  let count=0;
  for(let i=1;i<=a;i++){
  if(a%i==0){
    count++;
  }
}if(count==2){
  return true;
}else{
  return false;
}
} 
function allprimes(limit){
for(let i=2;i<=limit;i++){
  let ans=prime(i);
  if(!ans){
    console.log(i);
  }
} 
}allprimes(19)