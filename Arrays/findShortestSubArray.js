//Given a non-empty array of non-negative integers nums, the degree of this array is 
//defined as the maximum frequency of any one of its elements.

//Your task is to find the smallest possible length of a (contiguous) subarray of nums, 
//that has the same degree as nums.

const findShortestSubArray = (nums) => {
    let first_seen = {};
    let frequency = {}
    nums.forEach((num, indx) => {
        if(!first_seen[num]) {
            first_seen[num] = [indx, indx];
            frequency[num] = 1;
        }
        else {
            first_seen[num][1] = indx;
            frequency[num] += 1;
        }
    });

    let max_values = Object.values(frequency)
    let degree = Math.max(...max_values);
    let min_length = nums.length;
    for(let key in first_seen) {
        if(frequency[key] === degree) {
            min_length = Math.min(min_length, first_seen[key][1] - first_seen[key][0] + 1)
        }
    }
    return min_length; 
}
console.log(findShortestSubArray([1,2,2,3,1]))