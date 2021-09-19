class Node {
  constructor(key) {
    this.left = null;
    this.right = null;
    this.key = key;
  }
}
let root;

function isFoldable(root) {
  if (root == null) return true;
  let res;
  mirror(root.left);
  res = isStructSame(root.left, root.right);
  mirror(root.left);
  return res;
}
function isStructSame(a, b) {
  if (a == null && b == null) return true;
  if (
    a != null &&
    b != null &&
    isStructSame(a.left, b.left) &&
    isStructSame(a.right, b.right)
  ) {
    return true;
  }

  return false;
}
function mirror(node) {
  if (node == null) return;
  else {
    mirror(node.left);
    mirror(node.right);

    let temp = node.left;
    node.left = node.right;
    node.right = temp;
  }
}

root = new Node(1);
root.left = new Node(2);
root.left.right = new Node(3);
root.right = new Node(4);
root.right.left = new Node(5);

if (isFoldable(root)) {
  document.write("YES, the tree is foldable");
} else {
  document.write("NO");
}
root.left.left = new Node(7);
document.write("<br/><br/>");
if (isFoldable(root)) {
  document.write("YES, the tree is foldable");
} else {
  document.write("NO");
}
