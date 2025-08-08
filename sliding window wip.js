// Given an array of integers nums and an integer k, find the maximum average value of any contiguous subarray of length k.
// Return the answer as a floating point number.

// nums = [1,12,-5,-6,50,3]  k = 4 // 12.75


function maxAverage(nums, k) {
  let maxAverage = 0;
  let sum = 0;

  for(let i = 0; i < nums.length - k; i++) {
    if(i == 0) {
      let j = 0;
      while(j < k) {
        sum += nums[j];
        j++;
      }
      maxAverage = sum / k;
    } else {
      sum += nums[i+k];
      sum -= nums[i - 1];
      maxAverage = Math.max(maxAverage, sum / k);
    }
  }

  return maxAverage;
}

console.log(maxAverage([1,12,-5,-6,50,3], 4))


