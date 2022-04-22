// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

var isAnagram = function(s, t) {

    let s_Obj = {},
     t_Obj = {};
     
      if(s.length != t.length) {
        return false;
      }
 
     for(let i = 0; i < s.length; i++) {
         let char = s[i];
         if(!(char in s_Obj)) {
             s_Obj[char] = 0;
         }
         s_Obj[char] += 1;
         
         let rightChar = t[i]
         if(!(rightChar in t_Obj)) {
             t_Obj[rightChar] = 0
         }
         t_Obj[rightChar] += 1;
     }
 
      for (let key in  s_Obj){
           if(s_Obj[key] != t_Obj[key]) {
              return false
            }
       }
       return true;
 }
 
 
 
 console.log(isAnagram("aacc","ccac"))  //false
 console.log(isAnagram("anagram", "nagaram")) //true
 console.log(isAnagram("ab", "a")) //false

// Optimal solution

function isAnagram(s, t) {

    const countArr = new Array(26).fill(0) //allocating space for the 26 chars of the alphabet and fill them with 0s

    if (s.length !== t.length) {
        return false
    }
    //"aabbbc"
    for (let char of s) { //'a', 'a'
        //take the string'char' return the unicode of the firstchar and subtract from 97 - this is the index, then increment by 1
        countArr[char.charCodeAt(0) - 97] +=1;
    }

    for (let char of t) {
        countArr[char.charCodeAt(0) - 97] -= 1;  //use the second string to check to see if it's char exist in the array
    }

    return countArr.every(element => element === 0)
}

console.log(isAnagram("aacc","ccac"))  //false
 console.log(isAnagram("anagram", "nagaram")) //true
 console.log(isAnagram("ab", "a")) //false