const countBinarySubStrings = (s) => {

    let curr = 1, prev = 0, result = 0;
    for(let i = 1; i < s.length; i++) {
        if(s[i] === s[i + 1]) {
            curr +=1;
        }
        else {
            result+= Math.min(prev, curr)
            prev = curr;
            curr = 1;
        }
    }
    return result += Math.min(prev, curr)
}

const countBinarySubStrings = (s) => {
    let curr = 1; //increments by one everytime it encounters the same digit
    let prev = 0; // fixed at any diit either it can be a 0 or 1
    let result = 0; // increments if prev is greater then curr
    let i = 0;

    while(i < s.length) {
        if(s[i] === s[i -1]) {
            curr++;
        }
        else {
            prev = curr;
            curr = 1;
        }
        if(prev >= curr) {
            result += 1;
        }
        i++
    }
    return result;
    
}

//2 pointers curr and prev. Prev is going to be fixed at any digit either 
// it can be 0 or 1. Current is going to move or increment by one everytime 
//it is encountering the same digit which means it it going to keep track of the length
// of consecutive 0's or consecutive 1's.
//Once we place or find a different digit in that case we are going to swap the values
// that is we are again going to initialize our current to one and previous to the current
//length;
//Here our current has encountered a different digit so in this case we have found a 
//different digit which means it can be possibly be a substring that satisfies our
//criteria so now we are going to assign P is equal to 2 and current again initialize
//back to 1 because our current is going to keep track of the next set of consecutive
//digits that is here next consecutive onece. So now we are going to check whether our 
//previous is greater than or equal curr in that case we are going to increment result
// to 1
// P is equal to 2 actually means this is the maximum number of opposite digit I can 
// offer you to make a valid substring so in the case P is equal to the number of 0's
// and current is equal to the number of 1's so far.
