//Return the decimal value of the number in the linked list.
//Input: head = [1,0,1]
//Output: 5
//Explanation: (101) in base 2 = (5) in base 10

class Node {
    constructor(value, next = null) {
       this.value = value;
       this.next = next;
    }   
}

const getDecimalValue = head => {
    let currentNode = head;
    let tempNode = head;
    let nodeCount = 0
    let exponent, sumDecimal = 0;
    

    //count how many nodes are in the linked list
    while(tempNode !== null) {
       nodeCount += 1;
       tempNode = tempNode.next
    }

    //get the exponent and add the sum to get the decimal value;
    while (nodeCount > 0) {
        if(currentNode.value === 1) {
            currentNode.value += 1  //turn to 2
            exponent = Math.pow(currentNode.value, nodeCount -1)
            sumDecimal += exponent
        }
        currentNode = currentNode.next;
        nodeCount -= 1
    }
    return sumDecimal;
}

const head = new Node(1);
head.next = new Node(0);
head.next.next = new Node(1);

console.log(getDecimalValue(head));