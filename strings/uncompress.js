// The function should return an uncompressed version of the string where each 
// 'char' of a group is repeated 'number' times consecutively. You may assume 
// that the input string is well-formed according to the previously mentioned 
// pattern.

const uncompress = (s) => {
    let numbers = '0123456789';
    let i = 0;
    let j = 0;
    let result = [];

    while (j < s.length) {
        if (numbers.includes(s[j])) {
            j += 1;
        }
        else {
            const num = Number(s.slice(i, j));
            for (let i = 0; i < num; i++) {
                result.push(s[j]);
            }
            j += 1;
            i = j;
            
        }
    }
    return result.join('')
}

console.log(uncompress("2p1o5p"))


// This is multi Linear complexity:
// Time complexity = O(nm)
// Space complexity = O(nm)
// n = number of groups
// m = maximum number associated with any group. Should have nxm runtime
// Worse case = nxm chars long

// In JavaScript when doing a concatenation this is considered an O(n) runtime.
// That is because in JavaScript string are imutable, when ever you concatenate a 
// together you are actually creating a new string. A new copy. You must run in
// linear runtime based on the length of the string you are copying over.

// So for the most efficiency you'll need to use a javascript array because pushing 
// an element to the end of an array runs in constant time
 