//Given an array nums of size n, return the majority element.
//The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

//Input: nums = [2,2,1,1,1,2,2]
//Output: 2

const majorityElement = nums => {
    let count = 0;
    let element = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(count === 0) {
           element = nums[i]
        }
        if (element === nums[i]) {
            count++
        }
        else {
            count--
        }
    }
    return element;

}

console.log(majorityElement([2,2,1,1,1,2,2,]))