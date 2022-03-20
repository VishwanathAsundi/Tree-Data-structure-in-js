class tNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
let root = null;

function MorrisTraversal(root) {
    if (!root) return;

    let current = root;

    while (current != null) {
        if (current.left == null) {
            document.write(current.val, ", ");
            current = current.right;
        } else {
            let pre = current.left;
            while (pre.right != null && pre.right != current) {
                pre = pre.right;
            }

            if (pre.right == null) {
                pre.right = current;
                current = current.left;
            } else {
                pre.right = null;
                document.write(current.val, ", ");
                current = current.right;
            }
        }
    }
}

root = new tNode(1);
root.left = new tNode(2);
root.right = new tNode(3);
root.left.left = new tNode(4);
root.left.left.left = new tNode(10);
root.left.left.right = new tNode(15);
root.left.right = new tNode(5);

MorrisTraversal(root);