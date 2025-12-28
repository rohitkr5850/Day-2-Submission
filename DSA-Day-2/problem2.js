//Due to some technical issues my leetcode link not working so i am providing code in my github with folder named DSA-Day-2
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
     let maxProd = nums[0];
  let minProd = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let curr = nums[i];

    let tempMax = Math.max(curr, maxProd * curr, minProd * curr);
    let tempMin = Math.min(curr, maxProd * curr, minProd * curr);

    maxProd = tempMax;
    minProd = tempMin;

    result = Math.max(result, maxProd);
  }

  return result;
};