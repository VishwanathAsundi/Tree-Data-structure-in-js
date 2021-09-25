class Node {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}
function preOrder(root) {
  if (root == null) return;
  document.write(root.data, " ");
  preOrder(root.left);
  preOrder(root.right);
}
// without using recursion and stack
function morriesPreOrderTraversal(node) {
  if (node == null) return;

  while (node != null) {
    if (node.left == null) {
      document.write(node.data, " ");
      node = node.right;
    } else {
      let current = node.left;
      while (current.right != null && current.right != node) {
        current = current.right;
      }

      if (current.right == node) {
        current.right = null;
        node = node.right;
      } else {
        document.write(node.data, " ");
        current.right = node;
        node = node.left;
      }
    }
  }
}
let root;
root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);

morriesPreOrderTraversal(root);
document.write("<br/>Preorder traversal of tree: ");
preOrder(root);
