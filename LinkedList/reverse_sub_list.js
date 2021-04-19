//Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse 
//the LinkedList from position ‘p’ to ‘q’.

const reverse_sub_list = function(head, p, q) {
      
    const current = head,
    previous = null;

    //first part to keep track off
    let i = 0;
    while (current !== null && i < p - 1) {
        previous = current;
        current = next;
        i += 1;
    }
    first_part_previous = previous;
    sub_list_first = current;
    
    // keep track of the second part reverse the nodes
    while (current !== null && q - p + 1) {
       let next = current.next;
        current.next = previous;
        previous = current;
        current = next;
        i += 1;
    }
    // connect the first part of the linkedLink list with the third part.
    if (first_part_previous !== null) {
        first_part_previous.next = previous;
    }
    else {
        head = previous;
    }
    
    sub_list_first.next = current; //connect the first node of the sublist with the last

    return head;

}