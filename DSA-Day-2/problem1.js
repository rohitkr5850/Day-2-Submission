//Due to some technical issues my leetcode link not working so i am providing code in my github with folder named DSA-Day-2


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
currentSum = Math.max(nums[i], currentSum + nums[i]);
    
    maxSum = Math.max(maxSum, currentSum);
  
  }

  return maxSum;
};