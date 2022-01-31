// Write a function, linkedListValues, that takes in the head of a linked list as 
// an argument. The function should return an array containing all values of the nodes in the 
// linked list.

class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// const linkedListValue = (head) => {
//     let current = head;
//     let result = [];

//     while (current !== null) {
//         result.push(current.val)
//         current = current.next;
//     }
//     return result;
// }

//Recursive

const linkedListValue = (head) => {
    let result = [];
    
    const dfs = (current, result) => {
        if (current === null) return;
            result.push(current.val)
            dfs(current.next, result)
   }
   dfs(head, result)
   return result;
}

const head = new Node("a");
head.next = new Node(3)
head.next.next = new Node(4)
head.next.next.next = new Node(5)

console.log(linkedListValue(head))






