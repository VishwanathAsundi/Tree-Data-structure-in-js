class Node {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}
function isBST(root) {
  return isBSTUtil(root, 1, 5);
}
function isBSTUtil(node, min, max) {
  if (node == null) return true;

  if (node.data < min && node.data > max) return false;

  return (
    isBSTUtil(node.left, min, node.data - 1) &&
    isBSTUtil(node.right, node.data + 1, max)
  );
}
let root = new Node(4);
root.left = new Node(2);
root.left.left = new Node(1);
root.left.right = new Node(3);
root.right = new Node(5);

if (isBST(root)) {
  document.write("YES");
} else {
  document.write("NO");
}
