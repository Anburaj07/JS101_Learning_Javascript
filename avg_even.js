//Problem 4: Print the average of even numbers from 1 to 100 (both included)
let number=1;
let sum=0;
let avg=0;
while(number<=100){
  sum=sum+number;
  number++;
}
avg=sum/100;
console.log("Average of 100 is",avg);