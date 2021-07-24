// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated,
 // and only the integer part of the result is returned.

 //Example 1:

//Input: x = 4
//Output: 2

const sqrt = (x) => {
    let result, low = 1, high = x;

    if(x === 0 ) {
        return 0;
    }

    while(low <= high) {
        let mid = Math.floor(low + (high + low)/ 2) 
        let square = mid * mid;
        if(square <= x) {
            result = mid;
            low = mid + 1
        }
        else {
            high = mid - 1
        }
    }
    return result;
}
console.log(sqrt(10))