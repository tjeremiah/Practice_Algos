var isAnagram = function(s, t) {

    let s_Obj = {},
     t_Obj = {};
     
      if(s.length != t.length) {
        return false;
      }
 
     for(let i = 0; i < s.length; i++) {
         let char = s[i];
         if(!(char in s_Obj)) {
             s_Obj[char] = 0
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

