// Given an integer n, return a string array answer (1-indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i if non of the above conditions are true.

// Input: n = 3
// Output: ["1","2","Fizz"]
// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]

const fizzbuzz = n => {
    let result =[];
    let fizz = 'fizz';
    let buzz = 'buzz';

    for(let i = 1; i <= n; i++) {
        result[i - 1] = '';
        if(i % 3 === 0) {
            result[i -1] += fizz;
        }
        if (i % 5 === 0) {
            result[i - 1] += buzz;
        }
        if(result[i - 1] === '') {
            result[i - 1] += i.toString();
        }
    }
    return result;
}

console.log(fizzbuzz(15))

// Time complexity = O(N)
// Space Complexity = O(N)