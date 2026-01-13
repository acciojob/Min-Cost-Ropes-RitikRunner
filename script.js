
let arr = [4, 3, 2, 6]
function mincost(arr)
{ 
	let sum = 0;
	for(let i=0;i<=arr.length;i++){
		sum = sum+arr[i]
		return sum
	}
mincost(arr)	
//write your code here
// return the min cost
  
}

module.exports=mincost;
