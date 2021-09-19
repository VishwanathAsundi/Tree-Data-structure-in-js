class Node {
  constructor(key) {
    this.left = null;
    this.right = null;
    this.key = key;
  }
}
let root;
let temp = root;

function getHeight(root) {
  if (root == null) {
    return 0;
  } else {
    let lHeight = getHeight(root.left);
    let rHeight = getHeight(root.right);

    if (lHeight > rHeight) {
      return lHeight + 1;
    } else {
      return rHeight + 1;
    }
  }
}
function levelOrder(root) {
  let height = getHeight(root);
  for (let i = 1; i <= height; i++) {
    printCurrentLevel(root, i);
  }
}
function printCurrentLevel(root, level) {
  if (root == null) return;
  if (level == 1) {
    document.write(root.key, " ");
    return;
  } else if (level > 1) {
    printCurrentLevel(root.left, level - 1);
    printCurrentLevel(root.right, level - 1);
  }
}

root = new Node(1);
root.left = new Node(2);
root.left.right = new Node(5);
root.left.left = new Node(4);
root.right = new Node(3);
root.right.left = new Node(6);
root.right.right = new Node(7);
document.write(
  "Level order traversal/ Breadth first search of a binary tree  : "
);
levelOrder(root);
