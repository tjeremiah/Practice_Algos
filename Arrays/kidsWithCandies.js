const kidsWithCandies = (candies, extraCandies) => {
   
    let max = Math.max(...candies) 
    let max_candies;
    let result = [];
    for(let i = 0; i < candies.length; i++) {
        max_candies = candies[i] + extraCandies;
        if(max_candies >= max) {
           result.push(true)
        }
        else {
            result.push(false)
        }
        
    }
    return result;
}
console.log(kidsWithCandies([2,3,5,1,3], 3))

