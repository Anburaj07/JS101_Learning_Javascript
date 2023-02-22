function mapCharAndSum(N,K,str) {
    // Write code here
    let arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let obj={};
    let sum=0;
    for(let i=0;i<arr.length;i++){
        obj[arr[i]]=i+N;
    } for(let j=0;j<str.length;j++){
            for(let key in obj){
        if(key==str[j]){
            sum+=obj[key];
        }
    }
    }console.log(sum);
}
