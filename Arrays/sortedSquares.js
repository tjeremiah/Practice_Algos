//Given an integer array nums sorted in non-decreasing order, return an 
//array of the squares of each number sorted in non-decreasing order.
//Input: nums = [-4,-1,0,3,10]
//Output: [0,1,9,16,100]

const sortedSquares = nums => {
    let result = new Array(nums.length).fill(0); //create an array
    let start = 0; // starting element
    let end = nums.length -1; // element at the end
    let index = nums.length -1; // index for the new result array

    while (start <= end) {
        let startNum = nums[start];
        let endNum = nums[end]

        if(Math.abs(startNum) > Math.abs(endNum)) { //check to see if the abs value of the staring element is greater than the last element on the list
           result[index] = startNum ** 2;
           start++
        }
        else {
            result[index] = endNum ** 2;
            end--;
        }
        index--
    }
    return result;
}
console.log(sortedSquares([-4,-1,0,3,10]))