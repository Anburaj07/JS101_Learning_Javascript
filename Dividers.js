//You are provided 3 integers: left, right and k. Your task is to write a program that finds out the count of all such numbers between lefts and right (both inclusive) which are divided by k.
 // function masaiDivisors(left, right, k) {
    //write code here
let left =1;
let right=10;
let k=3;
    let count=0;
    for(left;left<=right;left++){
        if(left%k==0){
            count=count+1;
        }
    }console.log(count);
//}
