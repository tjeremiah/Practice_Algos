// Given an array of integers temperatures represents the daily temperatures, 
// return an array answer such that answer[i] is the number of days you have to wait 
// after the ith day to get a warmer temperature. If there is no future day for which 
// this is possible, keep answer[i] == 0 
// instead.

const dailyTemperatures = (temperature) => {
    let length = temperature.length -1
    let stack = [];

    for(let i = length; i >= 0; i--) {
        let curr = temperature[i];

        while(stack.length && curr >= stack[stack.length -1][0]) {
            stack.pop()
        }
        if(stack.length === 0) {
            temperature[i] = 0;
        }
        else {
            temperature[i] = stack[stack.length -1][1] - i;
        }
        stack.push([curr, i])
    }
    return temperature;
}
console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))