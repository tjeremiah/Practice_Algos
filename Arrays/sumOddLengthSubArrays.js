Input: arr = [1,4,2,5,3]
Output: 58
Brute Force
const sumOddLengthSubArrays = function(arr) {
      let sum = 0, start, end, len = arr.length;
      // Start with an odd range
      let range = 1;
      while (range <= len) {
          // makes the subArrays
            for(let i = 0; i + range <= len; i++) {
                let range_i = range + i;
                //prints out the sum of the subArrays
                for(j = i; j < range_i; j++) {
                    sum += arr[j];
                }

            }
      range +=2
      }
      return sum;
}
console.log(sumOddLengthSubArrays([1,4,2,5,3]))

//Most Optimized

const sumOddLengthSubArrays = function(arr) {
    let start, end, len = arr.length, sum = 0;
    for(let i = 0; i < len; i++) {
        start = len - i; //How many starting positions for the elements
        end = i + 1;   // How many ending positions for the elements
        let total = start * end; // total of the start and end of each element in each SubArray
        let odd = Math.ceil(total/2)  //select the odd subArrays
        sum += odd * arr[i]   //how many times arr[i] appears in this odd SubArray

    }
    return sum;
}

console.log(sumOddLengthSubArrays([1,4,2,5,3]))