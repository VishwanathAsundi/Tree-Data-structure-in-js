class Node {
  constructor() {
    this.data = 0;
    this.left = null;
    this.right = null;
  }
}

function getNode(data) {
  var newNode = new Node();
  newNode.data = data;
  newNode.left = newNode.right = null;
  return newNode;
}

function inorderTraversal(root) {
  if (root == null) return;

  inorderTraversal(root.left);
  arr.push(root.data);
  inorderTraversal(root.right);
}

function BSTToMinHeap(root) {
  if (root == null) return;
  root.data = arr[++i];
  BSTToMinHeap(root.left);
  BSTToMinHeap(root.right);
}
var arr = [];
var i;

function convertToMinHeapUtil(root) {
  i = -1;
  inorderTraversal(root);
  BSTToMinHeap(root);
}

function preorderTraversal(root) {
  if (root == null) {
    return;
  }

  document.write(root.data + " ");
  preorderTraversal(root.left);
  preorderTraversal(root.right);
}

var root = getNode(4);
root.left = getNode(2);
root.right = getNode(6);
root.left.left = getNode(1);
root.left.right = getNode(3);
root.right.left = getNode(5);
root.right.right = getNode(7);

convertToMinHeapUtil(root);
document.write("Preorder Traversal of Min Heap:" + "<br>");
preorderTraversal(root);
