// Write a function, sumList, that takes in the head of a linked list containing 
// numbers as an argument. The function should return the total sum of all values 
// in the linked list.

class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}
//iterative
// const sumList = (head) => {
//     let sum = 0;
//     let current = head;

//     while (current !== null) {
//         sum += current.val;
//         current = current.next
//     }
//     return sum;
// };

//recursion

const sumList = (head) => {
    
    if (head === null) return 0;
    return head.val + sumList(head.next)
};

const head = new Node(2);
head.next = new Node(3)
head.next.next = new Node(4)
head.next.next.next = new Node(5)

console.log(sumList(head))

