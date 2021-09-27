class Node {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}
function constructBinaryTree(root, arr, i) {
  if (i < arr.length) {
    let temp = new Node(arr[i]);
    root = temp;

    root.left = constructBinaryTree(root.left, arr, 2 * i + 1);
    root.right = constructBinaryTree(root.right, arr, 2 * i + 2);
  }
  return root;
}
function printInorder(root) {
  if (root == null) return;
  printInorder(root.left);
  document.write(root.data, " ");
  printInorder(root.right);
}

let arr = [1, 2, 3, 4, 5, 6, 6, 6, 6, 6];
document.write("Input array :", arr);
let root;
root = constructBinaryTree(root, arr, 0);
document.write("<br/>Constructed binary tree from array (inorder traversal):");
printInorder(root);
