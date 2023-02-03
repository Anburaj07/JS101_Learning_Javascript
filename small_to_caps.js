// convert small case char into capital case
let char="z";
let small=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let capital=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
for(i=0;i<small.length;i++){
  if(char==small[i]){
    char=capital[i]
  }
}
console.log(char);