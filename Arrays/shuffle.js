//Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
//Return the array in the form [x1,y1,x2,y2,...,xn,yn].

//Input: nums = [2,5,1,3,4,7], n = 3
//Output: [2,3,5,4,1,7] 
//Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

const shuffle = (nums, n) => {
    let arr = [];
    let i = 0;
    while(arr.length !== nums.length) {
        arr.push(nums[i]);
        i++
        arr.push(nums[n])
        n++;
    }
    return arr;
}

//Most optimized

const shuffle = (nums, n) => {
    let new_arr = []
    let i = 0;
    let sliced_arr = nums.slice(n)

    while (new_arr.length !== nums.length) {
           new_arr.push(nums[i]);
           new_arr.push(sliced_arr[i])
           i++;
    }
    return new_arr
}

console.log(shuffle([2,5,1,3,4,7], 3))