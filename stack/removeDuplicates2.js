//Input: s = "deeedbbcccbdaa", k = 3
//Output: "aa"
//Explanation: 
//First delete "eee" and "ccc", get "ddbbbdaa"
//Then delete "bbb", get "dddaa"
//Finally delete "ddd", get "aa"

// const removeDuplicates = (s, k) => {
//     let stack = [[]];
//     let length = stack.length -1;
//     for(let char of s) {
//        if(stack.length && stack[length][0] === char) {
//           stack[length][1] +=1;
//            if(stack[length][1] === k) {
//                stack.pop()
//            }
           
//         }
//         else {
//            stack.push([char, 1])
//         }
//     }
    
//     let result = '';
//     for(let [char, count] of stack) {
//         result += char.repeat(count)
//     }
//     return result;

// }
// console.log(removeDuplicates("deeedbbcccbdaha", 3))

const removeDuplicates = (s, k) => {
    let stack = [];

    for(let i = 0; i < s.length; i++) {
        if(stack.length === 0 || stack[stack.length -1][0] !== s[i]) {
            stack.push([s[i], 1])
        }
        else {
            stack[stack.length -1][1] = (stack[stack.length -1][1] + 1) % k;
            if(stack[stack.length -1][1] === 0) {
                stack.pop();
            }
        }
    }
    let result = '';
    stack.forEach(([char, indx]) => result += char.repeat(indx))
    return result;
}

console.log(removeDuplicates("deeedbbcccbdaha", 3))