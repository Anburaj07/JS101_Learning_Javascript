//Given an array find the unique items in the array
let arr=['anbu','bala','mala','bala','mala','sala','kala'];
let obb={};
let b=0;
for(let i=0;i<arr.length;i++){
  obb[arr[i]]=1;// adding obj elements
}console.log(obb);
//console.log(Object.keys(obb).length);