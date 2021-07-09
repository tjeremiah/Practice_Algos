//You are given a string s. We want to partition the string into as many parts as possible 
//so that each letter appears in at most one part.

//Return a list of integers representing the size of these parts.

//Input: s = "ababcbacadefegdehijhklij"
//Output: [9,7,8]

//Most Optimized
//this solution uses an array
const partitionLabels = function(s) {
      
    let arr = new Array(26).fill(-1)
    let start = 0;
    let end = 0, result = [];

    for(let i = 0; i < s.length; i++) {
        arr[s.charCodeAt(i) - 97] = i
    }

    for(let i = 0; i < s.length; i++) {
        end = Math.max(end, arr[s.charCodeAt(i) - 97])
        if(i === end) {
            result.push(end - start + 1)
            start = i + 1;
        }
    }
    return result;
}
console.log(partitionLabels("ababcbacadefegdehijhklij"))
//This solution initializes the chars with their lastIndex occurrence
const partitionLabels = function(s) {
    let result = [];
    let last = -1
    let start = 0;
    
    for(let i = 0; i < s.length; i++) {
        last = Math.max(last, s.lastIndexOf(s[i]))
        if(i === last) {
           result.push(i - start + 1)
           start = i + 1;
        }

    }
    return result;
}
