function reverse_every_k_elements(head, k) {

    const current = head;
    previous = null;

    while(true) {
        first_part_previous = previous; //keeping track of the previous node of the 1st part
        sub_list_part = current; // keeping track of the current node of in the sub_list
        next = null;  //temp storage for current
        i = 0;

        while (current !== null && i < k) { //reversing k nodes here
              next = current.next;
              current.next = previous;
              previous = current;
              current = next;
              i++;
        }
        //connect to the first part
        if (first_part_prevous !== null) {
            first_part_previous.next = previous;
        }
        else {
            head = previous;
        }
        sub_list_part.next = current

        if (current === null) {
            break;
        }

        previous = sub_list_part.next;
    }

    return head;
}