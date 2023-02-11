 for(let i=1;i<=4;i++){
        let s="";
   let sum=0;
        for(let j=1;j<=i;j++){
            s+=j;
          for(let z=0;z<s.length;z++){
            if(s[z]%2==0){
              sum=sum+z;
            }
          }
        }console.log(sum);
    }