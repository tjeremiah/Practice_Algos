// function subArraySum(arr, k) {
//   //increment a counter, to track when some part of the array has added up to k
//   // take a note of it
//   let sum = 0,
//   // here is where i'll take note of when my addition is equal k 
//    count = 0,
//   //will also need a place to store my sum.
//    cache = {};
  
//    for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];

//       if(sum == k) {
//          count += 1
//       }

//       if((sum - k) in cache) {
//           count += cache[sum -k]
//       }

//       if(sum in cache) {
//          cache[sum] += 1;
//       }
//       else {
//           cache[sum] = 1;
//       }
//     }
//     return count;

// }
// console.log(subArraySum([3,4,7,2,-3,1,4,2], 7));

//Optimal solution

function subArraySum(arr, k) {
    let sum = 0,
     count = 0;
     map = new Map();
     map.set(0, 1)
     for (let i = 0; i < arr.length; i++) {
         sum += arr[i];

         if (map.has(sum - k)) {
             count += map.get(sum -k)
         }
         
         if (map.has(sum)) {
             map.set(sum, map.get(sum) + 1)
         } 
         else {
              map.set(sum, 1)
         }

     }
     return count
}

console.log(subArraySum([3,4,7,2,-3,1,4,2], 7));

