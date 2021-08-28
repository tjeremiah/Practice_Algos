// Given two sorted arrays of integers, combine the values into one sorted array?

// Input: [1,3,5], [2,4,6,8,10]

// Output: [1,2,3,4,5,6,8,10]

const mergeSortedArrays = (arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    let totalElements = arr1.length + arr2.length
    
    while(i + j < totalElements) {
        if(arr1[i] === arr2[j]) {
            result.push(arr1[i]);
            i++;
            j++
        }
        else if(j >= arr2.length || (i < arr1.length && arr1[i] < arr2[j])){
            result.push(arr1[i])
            i++
        }
        else {
            result.push(arr2[j])
            j++
        }
    }

}

console.log(mergeSortedArrays([1,3,5],[1,2,3,4,5,6,8,10]))