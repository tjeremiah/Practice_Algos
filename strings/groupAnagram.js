//Given an array of strings strs, group the anagrams together. You can return the answer in any order.

//An Anagram is a word or phrase formed by rearranging the letters of a different word 
//or phrase, typically using all the original letters exactly once.


function groupAnagram(strs) {
     let result = [];
     let wordFrequency = {};
     strs.forEach(word => {
        let keyToMap = word.split('').sort().join('')
        if(keyToMap in wordFrequency) {
            wordFrequency[keyToMap].push(word)
        }
        else {
            wordFrequency[keyToMap] = [word]
        }
    })
    return Object.values(wordFrequency)

}

console.log(groupAnagram(["eat","tea","tan","ate","nat","bat"]))

//optimal Solution

function groupAnagram(strs) {

    cache = new Map();

    for (let str of strs) {
        sortedWord = str.split('').sort().join('');

        if (cache.has(sortedWord) ) {
            const cachePointer = cache.get(sortedWord) //cachePointer and sorted are referencing the same value
            cachePointer.push(str) //seeing that they are referencing the same value we can push 'str' to cachePointer
        }
        else {
            cache.set(sortedWord, [str]);
        } 
    }
    const result = [];

    cache.forEach(value => result.push(value));

    return result;
}

console.log(groupAnagram(["eat","tea","tan","ate","nat","bat"]))