class Node {
  constructor(key) {
    this.left = null;
    this.right = null;
    this.key = key;
  }
}
function modifyBinaryTree(root) {
  if (root == null) return;

  let st = [];
  st.push(root);

  let prev = null;
  while (st.length > 0) {
    let node = st.pop();

    if (node.right != null) {
      st.push(node.right);
    }
    if (node.left != null) {
      st.push(node.left);
    }
    if (prev != null) {
      prev.right = node;
    }
    prev = node;
  }
}
function printPre(root) {
  while (root != null) {
    document.write(root.key, " ");
    root = root.right;
  }
}
let root;
root = new Node(1);
root.left = new Node(2);
root.left.right = new Node(5);
root.left.left = new Node(4);
root.right = new Node(3);
root.right.left = new Node(6);
root.right.right = new Node(7);
modifyBinaryTree(root);
printPre(root);
