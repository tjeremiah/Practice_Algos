const minFlips = (target) => {

     let count = 0;
     let flip = '0'

     for(let i = 0; i < target.length; i++) {
         if(target[i] !== flip) {
            count++;
            flip = (flip === '0' ? '1' : '0') 
         }
     }
     return count;
}
console.log(minFlips("10111"))