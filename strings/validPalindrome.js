// Given a string s, return true if the s can be palindrome after deleting at most 
// one character from it.

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.

const validPalindrome = function(s) {
    let start = 0;
    let end = s.length -1;

    while(start < end) {
        if(s[start] !== s[end]) {
            return (isPalindrome(s, start + 1, end) || isPalindrome(s, start, end - 1))
        }
        start++;
        end--;
    }
    return true;
}

const isPalindrome = function(s, start, end) {
      
    while(start < end) {
        if(s[start] !== s[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;

}

console.log(validPalindrome("abcabtcba"))

