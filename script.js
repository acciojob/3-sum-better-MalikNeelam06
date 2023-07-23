function threeSum(arr, target) {
// write your code here
	arr.sort((a, b) => a - b); 
	let mainSum = Infinity; 
	for (let i = 0; i < arr.length - 2; i++)
		{ let a = i + 1; let b = arr.length - 1;
		 while (a < b)
			 { const CS = arr[i] + arr[a] + arr[b]; 
	if (Math.abs(target - CS) < Math.abs(target - mainSum)) 
	{ mainSum = CS; } 
			  if (CS < target) { a++; }
			  else if (CS > target) { b--; }
	else { return mainSum; } } } 
	return mainSum;
  
}

module.exports = threeSum;
