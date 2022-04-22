// const buildArray = (nums) => {
//     let ans = [];

//     for(let i = 0; i < nums.length; i++) {
//        ans[i] = nums[nums[i]]
//     } 
//     return ans;  
// }
// console.log(buildArray([0,2,1,5,3,4]))

const buildArray = function(nums) {
    return nums.map(num => nums[num])
}

console.log(buildArray([0,2,1,5,3,4]))