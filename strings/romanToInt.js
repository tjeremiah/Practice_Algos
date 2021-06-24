//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
//Symbol        Value
//I             1
//V             5
//X             10
//L             50
//C             100
//D             500
//M             1000


const romanToInt = s => {

    let myMap = new Map();
    myMap.set('I', 1)
    myMap.set('v', 5);
    myMap.set('X', 10);
    myMap.set('L', 50);
    myMap.set('C', 100);
    myMap.set('D', 500);
    myMap.set('M', 1000);
    
    let result = myMap.get(s[s.length - 1])

    for(let i = s.length - 2; i >= 0; i--) {
        if(myMap.get(s.charAt(i)) < myMap.get(s.charAt(i + 1))) {
           result -= myMap.get(s.charAt(i)) 
        }
        else {
           result += myMap.get(s.charAt(i))
        }
    }
    return result;
}

console.log(romanToInt("MCMXCIV"))
===============================================================================================

var romanToInt = s => {
    let result = 0;
    let map = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
    
    for (let i = 0; i < s.length; i++) {
        if(s[i + 1] && map[s[i]] < map[s[i + 1]]) {
            result -= map[s[i]];
        }
        else {
            result += map[s[i]]
        }
    }
    return result;
}