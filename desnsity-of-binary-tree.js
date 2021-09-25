class Node {
  constructor(key) {
    this.left = null;
    this.right = null;
    this.key = key;
  }
}
class Size {
  constructor() {
    this.size = 0;
  }
}
function getHeight(root, s) {
  if (root == null) return 0;
  else {
    let lHeight = getHeight(root.left, s);
    let rHeight = getHeight(root.right, s);

    s.size++;

    return lHeight > rHeight ? lHeight + 1 : rHeight + 1;
  }
}

let root;
function densityOfTree(root) {
  if (root == null) return;
  let s = new Size();

  let height = getHeight(root, s);
  console.log(s, height);
  document.write((s.size / height).toFixed(2));
}

root = new Node(1);
root.left = new Node(2);
root.left.right = new Node(5);
root.left.left = new Node(4);
root.right = new Node(3);
root.right.left = new Node(6);
root.right.right = new Node(7);
document.write("Density of a binary tree (size/height)  : ");
densityOfTree(root);
