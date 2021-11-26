const addTwoNumbers = (l1, l2) => {

    let head = new Node()
    let curr = head;
    let sum = 0;
    let carry = 0;
    l1.reverseList(l1);
    l2.reverseList(l2);
    
    while(l1 || l2) {
        //get the sum of the reverse values
        let l1Val = l1 ? l1.val : 0;
        let l2Val = l2 ? l2.val: 0;
        sum = l1Val + l2Val + carry;
        carry = sum > 9 ? 1 : 0;

        //find out if sum is > 10 by using mod and storing the value
        // into the return list;
        if(l1) {
           l1.val = sum % 10;
           curr.next = l1;
        }
        else {
            l2.val = sum % 10;
            curr.next = l2;
        }

        //move l1, l2 and curr to the next nodes;

        l1 = l1.next;
        l2 = l2.next;

        curr = curr.next
    }
    if(carr > 0) {
        curr.next = new Node(1)
    }
    return reverseList(head.next)
}

const reverseList = (head) {
    let prev = null;
    let curr = head

    while(curr !== null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}


const l1 = new ListNode(7)
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);
l1.next.next.next = new ListNode(3);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

console.log(addTwoNumbers(l1,l2))