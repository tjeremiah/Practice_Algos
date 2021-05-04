function reverse_alternate_k_elements (head, k) {
    const current = head,
    previous = null;
    if (k <= 0 || head == null) {
        return head;
    }

    while (current !== null) {
        const last_node_of_previous_part = previous;
        const last_node_of_sublist = current;
        let next;
        let i = 0;
        //reverse k nodes
        while (current !== null && i < k) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
            i += 1;
        }
        // connect to the first part
        if (last_node_of_previous_part !== null) {
           last_node_of_previous_part.next = previous;
        } 
        else {
            head = previous;
        } 
        
        //connect to the next part
        last_node_of_sublist.next = current;

        //skip 'k' elements
        i = 0;
        while (current !== null && i < k) {
             previous = current;
             current = current.next;
             i += 1;
        }

    }
    return head;
}