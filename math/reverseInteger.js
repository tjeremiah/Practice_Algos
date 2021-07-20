//Given a signed 32-bit integer x, return x with its digits reversed. If reversing x 
//causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then 
//return 0.

const reverse = (x) => {
    //check to see if x is a neg. number
    let isNegative = false;
    if(x < 0) {
       isNegative = true;
       x = x * -1 
    }
    let result = Number(x.toString().split('').reverse().join(''))
    if(isNegative) {
        result *= -1;
    }
    if(result > Math.pow(2, 31)) {
        return 0
    }
    else {
        return result;
    }

}
console.log(reverse(-123))
