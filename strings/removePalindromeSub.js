//You are given a string s consisting only of letters 'a' and 'b'. In a single step 
//you can remove one palindromic subsequence from s.
//Return the minimum number of steps to make the given string empty.

// Input: s = "ababa"
// Output: 1
// Explanation: s is already a palindrome, so its entirety can be removed in a single step.

// Input: s = "baabb"
// Output: 2
// Explanation: "baabb" -> "b" -> "". 
// Remove palindromic subsequence "baab" then "b".

var removePalindromeSub = (s) => {
    let start = 0;
    let end = s.length -1;

    for(let i = 0; i < s.length; i++) {
        if(s[start] !== s[end]) {
            return 2;
        }
        start += 1;
        end -= 1;
    }
    return 1;
}

//Most Optimized

var removePalindromeSub = (s) => {
    return s.length ===0 ? 0 : s.split('').reverse().join('') === s ? 1 : 2
}
console.log(removePalindromeSub("baabb"))