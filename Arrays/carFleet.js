//Leetcode 853

const carFleet = function(target, position, speed) {
    let pair = [];
    let stack = [];

    for (let i = 0; i < position.length; i++) {
        pair[i] = [position[i], speed[i]];
    }

    pair.sort((a,b) => b[0] - a[0]) //so that the car at the end of the list

    for(let i = 0; i < pair.length; i++) {
        stack.push((target - pair[i][0]) / pair[i][1]);
        if (stack.length >= 2 && stack[stack.length -1] <= stack[stack.length -2]) {
            stack.pop()
        }

    }
    return stack.length;
}
console.log(carFleet(12, [10,8,0,5,3], [2,4,1,1,3]))