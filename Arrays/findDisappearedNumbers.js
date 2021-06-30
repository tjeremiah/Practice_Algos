//Given an array nums of n integers where nums[i] is in the range [1, n], 
//return an array of all the integers in the range [1, n] that do not appear in nums.

//Input: nums = [4,3,2,7,8,2,3,1]
//Output: [5,6]

const findDisappearedNumbers = (nums) => {
    //create a new element  nums by creating a new Index;
    for(let i = 0; i < nums.length; i++) {
        let newIndex = Math.abs(nums[i]) -1;
        
        if(nums[newIndex] > 0) {
           nums[newIndex] *= -1 
        }
    }
    let result = [];
    for(let i = 1; i < nums.length; i++) {
        if(nums[i -1] > 0) {
            result.push(i)
        }
    }
    return result;
}
console.log(findDisappearedNumbers([4,6,5,7,8,5,6,1]))