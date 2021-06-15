//Given two integer arrays nums1 and nums2, return an array of their intersection. 
//Each element in the result must be unique and you may return the result in any order.

//Input: nums1 = [1,2,2,1], nums2 = [2,2]
//Output: [2]

// Most optimized
const intersection = (nums1, nums2) => {
    let arr = nums1.filter(n => nums2.includes(n))
    let result = new Set(arr)

    return [...result]
}

