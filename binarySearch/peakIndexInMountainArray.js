//Given an integer array arr that is guaranteed to be a mountain, return any i such that
//arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

//Input: arr = [0,2,1,0]
//Output: 1

const peakIndexInMountainArray = arr => {
    let start = 0;
    let end = arr.length -1;

    while(end - start > 1) {
        let mid = Math.floor(start + (end - start) / 2)
        if (arr[mid] > arr[mid - 1 ] && arr[mid] > arr[mid + 1]) {
            return mid;
        }
        else if (arr[mid] < arr[mid - 1]) {
            end = mid - 1;
        }
        else {
            start = mid + 1
        }
    }
    return arr[end] > arr[start] ? end : start
}
console.log(peakIndexInMountainArray([3,4,5,1]))