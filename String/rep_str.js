let a="go%.a$.";
let s="";
for(let i=0;i<a.length;i++){
  if(a[i]=='%'){
    s+='h';
    continue;
  }
  if(a[i]=='$'){
    s+='n';
    continue;
  }
  if(a[i]=="."){
    s+="";
    continue;
  }
  else{
    s=s+a[i];
  }
}console.log(s);
