class Node {
  constructor(key) {
    this.left = null;
    this.right = null;
    this.key = key;
  }
}
let root;

function isContinuousTree(root) {
  if (root == null) return true;
  if (root.left == null && root.right == null) return true;

  if (root.left == null) {
    return (
      Math.abs(root.key - root.right.key) == 1 && isContinuousTree(root.right)
    );
  }

  if (root.right == null) {
    return (
      Math.abs(root.key - root.left.key) == 1 && isContinuousTree(root.left)
    );
  }

  if (root.left && root.right) {
    return (
      Math.abs(root.key - root.left.key) == 1 &&
      Math.abs(root.key - root.right.key) == 1 &&
      isContinuousTree(root.left) &&
      isContinuousTree(root.right)
    );
  }
}
function inorder(root) {
  if (root == null) return;
  inorder(root.left);
  document.write(root.key, " ");
  inorder(root.right);
}

root = new Node(3);
root.left = new Node(2);
root.left.right = new Node(3);
root.left.left = new Node(1);
root.right = new Node(4);
root.right.right = new Node(5);

document.write("Inorder Traversal of a tree :");
inorder(root);

if (isContinuousTree(root)) {
  document.write("<br/> YES, The tree is Continuos tree");
} else {
  document.write("<br/> Not a continous tree");
}

document.write("<br/>");

root.right.right.left = new Node(10);
document.write("Inorder Traversal of a tree :");
inorder(root);
if (isContinuousTree(root)) {
  document.write("<br/> YES, The tree is Continuos tree");
} else {
  document.write("<br/> Not a continous tree");
}
