//Given an array of integers numbers that is already sorted in non-decreasing order, 
//find two numbers such that they add up to a specific target number.

//Input: numbers = [2,7,11,15], target = 9
//Output: [1,2]

const twoSum = (numbers, target) => {
      let start = 0;
      let end = numbers.length - 1;

      while(start <= end) {
          let sum = numbers[start] + numbers[end]
          if(sum === target) {
              return [start + 1, end + 1]
          }
          else if(sum < target) {
               start += 1
          }
          else {
              end -= 1;
          }
      }
}
console.log(twoSum([-1,0], -1))
