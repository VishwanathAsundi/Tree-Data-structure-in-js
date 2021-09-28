class Node {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}
let root = null;
function constructBSTFromPre(pre, size) {
  let s = [];
  let root = new Node(pre[0]);
  s.push(root);

  for (let i = 1; i < size; i++) {
    let temp = null;

    while (s.length > 0 && pre[i] > s[s.length - 1].data) {
      temp = s.pop();
    }
    if (temp != null) {
      temp.right = new Node(pre[i]);
      s.push(temp.right);
    } else {
      temp = s[s.length - 1];
      temp.left = new Node(pre[i]);
      s.push(temp.left);
    }
  }
  return root;
}
function inorder(root) {
  if (root == null) return;
  inorder(root.left);
  document.write(root.data, " ");
  inorder(root.right);
}
let pre = [10, 5, 1, 7, 40, 50];
root = constructBSTFromPre(pre, pre.length);
document.write("Inorder traversal of BST is :");
inorder(root);
