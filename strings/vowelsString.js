// swap vowels from the left and right
//eg "hello WOrld"  => "hOllo Werld"

const vowelsString = (s) => {
    s = s.split('')
    let vowels = ['a', 'e','i','o','u', 'A','E','I','O','U']
    let start = 0;
    let end = s.length -1;

    while(start < end ) {
        if(!(vowels.includes(s[start])) && !(vowels.includes(start[end]))) {
            start += 1;
            end -= 1;
            continue;
        }
        else if(vowels.includes(s[start]) && vowels.includes(s[end])) {
            let temp = s[end];
            s[end--] = s[start];
            s[start++] = temp
        }
        else if(vowels.includes(s[start]) && !(vowels.includes(s[end]))) {
            end -= 1;
        }
        else {
            start += 1;
        }
    }
   return s.join('');
}
console.log(vowelsString("hello WOrld"));