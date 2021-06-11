//You are given a string s consisting of lowercase English letters. A duplicate removal 
//consists of choosing two adjacent and equal letters and removing them.

//Input: s = "abbaca"
//Output: "ca"

const removeDuplicates = s => {
    //create an empty stack
     let stack = [];
     // iterate through the string
     for(let i = 0; i < s.length; i++) {
         // check if the top of the stack is the same as s[i]
         if (s[i] == stack[stack.length -1]) {
             //if yes remove the last element from the stack
             stack.pop();
         }
         else {
             // if not then push the element unto the stack
             stack.push([s[i]])
             console.log("the stack is = ", stack)
         }
     }
     return stack.join('')
}
console.log(removeDuplicates("azxxzy"))