//Given a string s and a character c that occurs in s, return an array of integers
//answer where answer.length == s.length and answer[i] is the distance from index 
// i to the closest occurrence of character c in s.

//The distance between two indices i and j is abs(i - j), where abs is the absolute 
//value function.


const shortestToChar = (s, c) => {
    let c_position = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] === c) {
            c_position.push(i)
        }
    }
    let result = [];
    for(let i = 0; i < s.length; i++) {
        let min_distance = Number.MAX_VALUE;
        let prev_distance = Number.MAX_VALUE;
        for(let j = 0; j < c_position.length; j++) {
            let distance = Math.abs(c_position[j] - i)
            if(distance < min_distance) {
                min_distance = distance;
            }
            else if(distance > prev_distance) {
                break;
            }
            prev_distance = distance;
        }
        result.push(min_distance)
    }
    return result;
}
console.log(shortestToChar("loveleetcode","e"))
