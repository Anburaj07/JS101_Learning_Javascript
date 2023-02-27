// Write a function to check if the char is a small case or not.
function check(char){
  let lower='abcdefghijklmnopqrstuvwxyz';
  let result=false;
  for(let i=0;i<lower.length;i++){
    if(char==lower[i]){
      result=true;
      break;
    }
}return result;
}
let mem=check('k')
if(mem){
  console.log("It is small case");
}else{
  console.log("It's capital case")
}