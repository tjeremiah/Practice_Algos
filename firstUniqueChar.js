//Given a string s, return the first non-repeating character in it and return 
//its index. If it does not exist, return -1

var firstUniqChar = function(s) {
  
    let charFrequency = {},
     minIndex = 0;
 
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

//Optimal Solution using an Array and charCodeAt()

const firstUniqChar = function(s) {

    let arr = new Array(26).fill(-1);
    let min = Infinity;

    for (let i = 0; i < s.length; i++) {
         let indx = s.charCodeAt(i) - 97;

         if (arr[indx] !== -1 ) {
            arr[indx] = Infinity;
         }
         else {
            arr[indx] = i;
         }
    }

    for (let i = 0; i < 26; i++) {
        if (arr[indx] !== -1 && arr[indx] !== Infinity) {
            min = Math.min(min, arr[i])
        }
    }

    if (min === Infinity) {
       return -1;
    }
    else {
       return min;
    }

}

console.log(firstUniqChar("loveleetcode"))