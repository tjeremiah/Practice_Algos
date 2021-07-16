// Is "carrace" a Palindrome of "racecar"

const AnagramPalindrome = (s) => {
    let cache = {};
    for(let i = 0; i < s.length; i++) {
        let char = s[i];
        if(!char in cache) {
            cache[char] = 0
        }
        else {
            delete cache[char]
        }

    }
    return ((Object.keys(cache).length === 1) || (Object.keys(cache).length === 0) ? true : false) 
        
}
console.log(AnagramPalindrome("carrace"));
