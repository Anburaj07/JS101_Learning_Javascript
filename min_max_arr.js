//console.log(Math.max.apply(Math,arr));
//console.log(Math.min(...arr));
let arr=[1,2,-3,35,4,-5,-22,34];
let min=arr[0];
let max=arr[0];
for(let i=1;i<arr.length;i++){
  if(arr[i]<min){
    min=arr[i];
  }
  if(arr[i]>max){
    max=arr[i];
  }
}console.log("Min:",min);
console.log("Max:",max)