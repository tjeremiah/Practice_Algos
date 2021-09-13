class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
};

const mergeBinaryTree = function(tl, t2) {
    if(t1 === null) {
        return t2;
    }
    if(t2 === null) {
        return t1;
    } 
    t1.val += t2.val;

    t1.left = mergeBinaryTree(t1.left, t2.left)
    t1.right = mergeBinaryTree(t1.right, t2.right)

    return t1;

}

const t1 = new Node(1);
tl.left = new Node(3);
t1.right = new Node(2);
tl.left.right = new Node(5)


const t2 = new Node(2)
t2.left = new Node(1);
t2.right = new Node(3);
t2.left.right = new Node(4);
t2.right.right = new Node(7);

console.log(mergeBinaryTree(t1, t2))