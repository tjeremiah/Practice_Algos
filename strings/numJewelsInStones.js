// const numJewelsInStones = (jewels, stones) => {

//     let count = 0;
//     for(let i = 0; i < jewels.length; i++) {
//         for(let j = 0; j < jewels.length; j++) {
//             if(jewels[i] === stones[j]) {
//                 count++;
//             }
//         }
//     }
//     return count;
// }

const numJewelsInStones = (jewels, stones) => {
    let count = 0;
    for(let i of stones) {
        if(jewels.includes(i)) {
            count++;
        }
    }
    return count;
}
console.log(numJewelsInStones("aA", "aAAbbbb"))