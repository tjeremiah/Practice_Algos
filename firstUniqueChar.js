var firstUniqChar = function(s) {
  
    let charFrequency = {},
     minIndex = 0
 
    for (let i = 0; i < s.length; i++) {
       let char = s[i];
      if(!(char in charFrequency)) {
         charFrequency[char] = 0;
     }
     charFrequency[char] += 1;
     
   }
 
   for(key in charFrequency) {
      if(charFrequency[key] == 1) {
         return s.indexOf(key)
      }
   }
   return -1
    
 };

 console.log(firstUniqChar("leetcode"))
 console.log(firstUniqChar("loveleetcode"))
 console.log(firstUniqChar("aabb"))