function threeSum(arr, target) {
// write your code here
	nums.sort((a, b) => a - b); 
	let mainSum = Infinity; 
	for (let i = 0; i < nums.length - 2; i++)
		{ let a = i + 1; let b = nums.length - 1;
		 while (a < b)
			 { const CS = nums[i] + nums[a] + nums[b]; 
	if (Math.abs(target - CS) < Math.abs(target - mainSum)) 
	{ mainSum = CS; } 
			  if (CS < target) { a++; }
			  else if (CS > target) { b--; }
	else { return mainSum; } } } 
	return mainSum;
  
}

module.exports = threeSum;
