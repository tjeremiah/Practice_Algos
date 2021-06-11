//find the first and last element in sorted Array
//input: nums = [5, 7,7,8,8,10]  target = 8;

const find_range = (nums, key) => {
    let result = [-1, -1];

    result[0] = binary_search(nums, key, false)
    if(result[0] !== -1) {
        result[1] = binary_search(nums, key, true)
    }

    return result;
}

const binary_search = (nums, key, findMaxIndex) => {
    let start = 0;
    let end = nums.length - 1;
    let keyIndex = -1;
    //find an element which will be equal to key
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
         if (key < nums[mid]) {
             end = mid - 1;
         }
         else if (key > nums[mid]) {
             start = mid + 1;
         }
         else { //if element is equal to the key 
             keyIndex = mid 
             if(findMaxIndex) {
                 start = start + 1; // search ahead to find the last index of 'key'
             }
             else {
                 end = mid -1; // search behind to find the first index of 'key'
             }
         }
    }
    return keyIndex
}
console.log(find_range([4, 6, 6, 6, 9], 6))