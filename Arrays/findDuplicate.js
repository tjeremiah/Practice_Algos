// find the duplicate number. Given an array of integers nums containing n + 1 integers 
//where each integer is in the range [1,n] inclusive.

//input: nums = [1 ,3, 4, 2, 2]   OutPut: 2

//Solution 1: Use a Set

const findDuplicate  = function(nums) {
    const set = new Set();

    for(let i = 0; i < nums.length; i++) {
        if(set.has(num[i])) {
            return num[i];
        }
        set.add(num[i])
    }
}

// Solution 2: Most Optimized
const findDuplicate = function(nums) {

    let slow = num[0];
    let fast = num[num[0]]
    // check to see if there a cycle.
    while(fast !== slow) {
        slow = num[slow];
        fast = num[num[fast]]
    }

    //if there's a cycle then find the intersection point to enter the circle.
    // the duplicate node will be the cycle entrance
    fast = 0;
    while(fast !== slow) {
        slow = num[slow];
        fast = num[fast];
    }
    return slow;
}