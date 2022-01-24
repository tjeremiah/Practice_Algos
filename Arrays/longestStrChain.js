//You are given an array of words where each word consists of lowercase English letters.

//wordA is a predecessor of wordB if and only if we can insert exactly one letter anywhere in wordA without changing the order of the other characters to make it equal to wordB.

// For example, "abc" is a predecessor of "abac", while "cba" is not a predecessor of "bcad".
// A word chain is a sequence of words [word1, word2, ..., wordk] with k >= 1, where word1 is a predecessor of word2, word2 is a predecessor of word3, and so on. A single word is trivially a word chain with k == 1.

// Return the length of the longest possible word chain with words chosen from the given list of words.

const longestStrChain = function(words) {
    
    words.sort((a,b) => a.length - b.length);
    
    dp = new Array(words.length)

    for (let i = 0; i < words.length; i++) {
        let max = 1;
        for (let j = 0; j < i; j++) {
            if(words[i].length - words[j].length === 1 && isSequence(words[i], words[j])) {
               max = Math.max(max, dp[j] + 1)

            }

        }
        dp[i] = max

    }
    return Math.max(...dp)
};

const isSequence = function(shortest, longest) {
     let idx1 = 0, idx2 = 0, insert = 0;

     while (idx1 < shortest.length && idx2 < longest.length) {
         if(shortest[idx1] !== longest[idx2]) {
             insert++
             idx2++
         }
         else {
             idx1++; idx2++;
         }
         if (insert > 1) {
             return false;
         }
     }
     return true;
}

console.log(longestStrChain(["a","b","ba","bca","bda","bdca"]));