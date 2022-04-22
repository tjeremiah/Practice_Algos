//The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci 
//sequence, such that each number is the sum of the two preceding ones, starting from 0 
//and 1. That is,

//F(0) = 0, F(1) = 1
//F(n) = F(n - 1) + F(n - 2), for n > 1.
//Given n, calculate F(n).

//Input: n = 2
//Output: 1
//Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.


const fib = (n, memo = new Map()) {
    
    if(n === 0) {
        return 0;
    }
    if(n === 1) {
        return 1;
    }

    if(memo.has(n)) {
        return memo.get(n)
    }
    let result = fib(n - 1, memo) + fib(n - 2, memo)
    memo.set(n, result)
    return result;
}
console.log(fib(5))

//Most Optimized

const fib = (n) => {
    if(n === 0) {
        return 0;
    }
    if(n === 1) {
        return 1;
    }
    let result = 0;
    let temp1 = 0;
    let temp2 = 1;

    for(let i = 2; i <= n; i++) {
        result = temp1 + temp1;
        temp2 = temp1;
        temp1 = result;
    }
    return result;
}

console.log(fib(5))