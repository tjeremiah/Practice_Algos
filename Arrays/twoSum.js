// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// 2 of the numbers will add up to target

var twoSum = function(nums, target) {
    let cache = {};
    for(let i = 0; i < nums.length; i++) {
        let currentValue = nums[i];
        let diffValue = target - currentValue;
        if (diffValue in cache){
          return [cache[currentValue], i]
        }
        cache[currentValue] = i;
    }
};

var twoSum = function(nums, target) {
    
    let cache = {};
    
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i]; // 2, 7
        console.log('val = ', val)
        let diffValue = target - val; // 9 - 7 = 2
        console.log('diffValue = ', diffValue)
        if(diffValue in cache) {
            return [cache[diffValue], i ]
        }
        cache[val] = i; 
        console.log('cache val = ', cache)
        
        
    }
    
};
console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,3], 6 ))

//optimal Solution

function twoSum(nums, target) {

    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++ ) {
            if(nums[i] + nums[j] === target) { // if two numbers add up to target return their indices
                return [i, j];
            }
        }
    }
}

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,3], 6 ))