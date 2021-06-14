//Given a string s, reconstruct the permutation perm and return it. 
//If there are multiple valid permutations perm, return any of them.

//Input: s = "IDID"
//Output: [0,4,1,3,2]
//Input: s = "III"
//Output: [0,1,2,3]

//Time complexity = O(2n)
//Space complexity = O(2n)

// const diStringMatch = s => {
//     let result = []
//     let range = [...Array(s.length + 1)].map((currentVal, i) => i);

//     let I = 0;
//     let D = s.length;

//     for(let i = 0; i < s.length + 1; i++) {
//         if (s[i] === 'I') {
//             result.push(range[I])
//             I++
//         }
//         else {
//             result.push(range[D]);
//             D--
//         }
//     }
        
//     return result;
// }

//most Optimized 
// Time complexity : O(n)
// Space Complexity: O(n)
const diStringMatch = s => {
    let result = [];
    let I = 0;
    let D = s.length;

    for(let i = 0; i < s.length + 1; i++) {
        if (s[i] === 'I') {
            result.push(I++)
        }
        else {
            result.push(D--)
        }
    }
    return result;
}

console.log(diStringMatch('IDID'))