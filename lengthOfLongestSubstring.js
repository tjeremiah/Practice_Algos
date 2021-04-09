//Given a string s, find the length of the longest substring without repeating characters.


var lengthOfLongestSubstring = function(s) {

    let cache = {},
    maxLength = 0,
    start = 0;
    for(let end = 0; end < s.length; end++) {
        let rightChar = s[end];
        //check to see if the char is in the map. If so, start sliding the window, need only 1 occurrence of the char
        //// and if 'windowStart' is already ahead of the last index of 'rightChar', we'll keep 'windowStart'
        if(rightChar in cache ) {
           //start sliding the window  
           start = Math.max(start, cache[rightChar] + 1)
        } 
        //add the rightChar to the map
        cache[rightChar] = end
        //remember the length so far
        maxLength = Math.max(maxLength, end - start + 1)
     }
     return maxLength
  
};

console.log(`Length of the longest substring: ${lengthOfLongestSubstring('aabccbb')}`);
console.log(`Length of the longest substring: ${lengthOfLongestSubstring('abbbb')}`);
console.log(`Length of the longest substring: ${lengthOfLongestSubstring('abccde')}`);

//Most optimized solution:

const function lengthOfLongestSubstring(str) {
    let charsArray = new Array(128),
     start = 0,
     end = 0,
     maxLength = 0;

     while (end < str.length) {
        let charValue = s.charCodeAt(start);
         
        let index = charsArray[charValue];

        if (index !== null && index >= end && index < start) {
           start = index + 1;
        }

        maxLength = Math.max(maxLength, end - start + 1)

        charArray[charValue] = end;
        end++;
     }

}