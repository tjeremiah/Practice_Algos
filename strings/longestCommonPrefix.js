//Write a function to find the longest common prefix string amongst 
//an array of strings.
//If there is no common prefix, return an empty string "".

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

const longestCommonPrefix = (strs) => {
    let word1 = strs[0];
     let result = ""
    for(let i = 0; i < word1.length; i++) {
        for(let j =1; j < strs.length; j++) {
            if(word1.charAt(i) === strs[j].charAt(i)) {
                continue;
            }
            else {
                return result;
            }
        }
        result+= word1.charAt(i);

    }
    
    return result;
}
console.log(longestCommonPrefix(["flower","flag", "flight"]))