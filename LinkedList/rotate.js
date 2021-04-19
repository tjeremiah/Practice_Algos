function rotate (head, rotate) {

    let last_node = head,
     list_length = 1;
     // find the length of the linkedlist 
     while (last_node !== null) {
         last_node = last_node.next;
         list_length += 1;
     }

     // connect the last node on the list with the first to create a circular list
     last_node.next = head;
     rotation %= list_length;
     skip_list = list_length - rotation;
     last_node_after_rotation = head;
     for (let i = 0; i < skip_list -1; i++) {
         last_node_after_rotation = last_node_after_rotation.next;
     }
     
     //connect the last_node_after_rotation to null;

     head = last_node_after_rotation.next ;
     last_node_after_rotation.next = null;



}