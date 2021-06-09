//Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
//Return the running sum of nums.
//Input: nums = [1,2,3,4]
//Output: [1,3,6,10]
//Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

//Most Optimized
const runningSum = arr => {
    let sum, counter = 0, temp = [];

    const reducer = (acc, currentVal) => {
         sum = acc + currentVal;
         temp[counter] = sum;
         counter++;

         return sum; //return sum to reduce
    }
     
    nums.reduce(reducer, 0)
    return temp;
}
console.log(runningSum([1,2,3,4]))

//brute force
const runningSum = arr => {
    let result = [], sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
        result.push(sum)
    }
    return result;
}

//Time complexity: O(N)
// space complexity: O(N)