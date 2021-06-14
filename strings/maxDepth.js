//Given a VPS (Valid parentheses string) represented as string s, return the nesting depth of s.

const maxDepth = str => {
   let depth = 0;
   let maxDepth = 0;

   for(char of str) {
       if (char === '(' ) {
           depth += 1;
           if (depth > maxDepth) {
               maxDepth = depth;
           }
       }
       else if ( char === ')' ) {
           depth -= 1;
       }
   }
   return maxDepth;
}

console.log(maxDepth("(1+(2*3)+((8)/4))+1"))

