//Given a string print, the number of times each character appears
let str='anburaj';
let obb={};
for(i=0;i<str.length;i++){
  if(obb[str[i]]==undefined){
    obb[str[i]]=1;
  }
  else{
    obb[str[i]]++;
  }
}
for(let a in obb){
  console.log(a,obb[a]);
}