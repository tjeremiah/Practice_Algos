//Return the index of the first occurrence of needle in haystack, or -1 if needle 
//is not part of haystack.

//Input: haystack = "hello", needle = "ll"
//Output: 2

const strStr = (haystack, needle) => {
    if(needle === "") {
        return 0;
    }
    if(needle.length > haystack.length) {
        return -1;
    }

    for(let i = 0; i < haystack.length; i++) { 
        for(j = 0; j < needle.length; j++) { 
            if(haystack[i+j] !== needle[j]) {
               break
            }
            if(j === needle.length -1) {
              return i;
            }
        }
    }
    return -1;
}
console.log(strStr("helao", "la"))