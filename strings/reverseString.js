//Write a function that reverses a string. The input string is given as an array of 
//characters s.
//Do not allocate extra space for another array. You must do this by modifying 
//the input array in-place with O(1) extra memory.

//Input: s = ["h","e","l","l","o"]
//Output: ["o","l","l","e","h"]

const reverseString = function(s) {
    let tempIndex = s.length -1;
    let length = Math.floor(s.length / 2)

    for(let i = 0; i < s.length / 2; i++) {
        let temp = s[i];
        s[i] = s[tempIndex]
        s[tempIndex] = temp;
        tempIndex -= 1
    }
    return s;
}

console.log(reverseString(["h","e","l","l","o"]))