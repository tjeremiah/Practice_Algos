//Input: expression = "2-1-1"
//Output: [0,2]
//Explanation:
//((2-1)-1) = 0 
//(2-(1-1)) = 2

const diffWaysToCompute = (expression) => {
    if(!expression.length) {
        return [0];
    }
    let result = []
    for(let idx = 0; idx < expression.length; idx++) {
        let char = expression[idx];
        if(char === "-" || char === "*" || char ==="+") {
           let left = diffWaysToCompute(expression.substring(0, idx));
           let right = diffWaysToCompute(expression.substring(idx + 1));
           for(let leftValue of left) {
               for(let rightValue of right) {
                   switch(char) {
                       case "*":
                        result.push(parseInt(leftValue) * parseInt(rightValue)) 
                       break;  
                       case "+":
                        result.push(parseInt(leftValue) + parseInt(rightValue)) 
                      break; 
                      case "-":
                        result.push(parseInt(leftValue) - parseInt(rightValue)) 
                      break;   
                   }
               }
           } 
        }
    }
    if(!result.length) {
        return [expression]
    }
    return result;
}
console.log(diffWaysToCompute("2*3-4*5"))