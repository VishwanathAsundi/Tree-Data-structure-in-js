class Node {
  constructor(key) {
    this.left = null;
    this.right = null;
    this.key = key;
  }
}
let root;

function isMirror(node1, node2) {
  if (node1 == null && node2 == null) return true;
  if (
    node1 != null &&
    node2 != null &&
    node1.key == node2.key &&
    isMirror(node1.left, node2.right) &&
    isMirror(node1.right, node2.left)
  ) {
    return true;
  }
  return false;
}
root = new Node(1);
root.left = new Node(2);
// root.left.right = new Node(12);
// root.left.left = new Node(7);
root.right = new Node(2);
// root.right.left = new Node(15);
// root.right.right = new Node(8);
if (isMirror(root, root)) {
  document.write("Symmetric");
} else {
  document.write("Not symmetric");
}
