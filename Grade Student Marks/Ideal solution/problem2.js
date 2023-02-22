let arr=[
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	}
]
let a=[];
for(let i=0;i<arr.length;i++){
   for(let j=0;j<arr[i]['students'].length;j++){   
let sum=0;
  for(let k=0;k<arr[i]['students'][j]['marks'].length;k++){
    
    sum+=(arr[i]['students'][j]['marks'][k]);

  } a.push(sum)    

}if(a[0]>a[1]){
     console.log(arr[i]['grade']+'-'+arr[i]['students'][0]['name']+'-'+a[0]);
   }else{
     console.log(arr[i]['grade']+'-'+arr[i]['students'][1]['name']+'-'+a[1]);
   }
}