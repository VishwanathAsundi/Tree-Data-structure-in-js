class Node {
  constructor(key) {
    this.key = key;
    this.left = this.right = null;
  }
}
let root;
let In = [];

function inOrder(root) {
  if (root == null) return;
  inOrder(root.left);
  In.push(root.key);
  inOrder(root.right);
}

let count = 0;
function NthInorder(node, n) {
  if (node == null) return;

  if (count <= n) {
    /* first recur on left child */
    NthInorder(node.left, n);
    count++;

    // when count = n then print element
    if (count == n) {
      document.write(node.key + " ");
      return;
    }

    /* now recur on right child */
    NthInorder(node.right, n);
  }
}

root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);

let n = 4;

// inOrder(root);
NthInorder(root, n);
console.log(In, "In");
console.log(In[n - 1], " nth node is");
