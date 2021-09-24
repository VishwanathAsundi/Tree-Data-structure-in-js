class Node {
  constructor(key) {
    this.left = null;
    this.right = null;
    this.key = key;
  }
}
let root;
function levelOrderTraveralInSpiralForm(tree) {
  let ltr = false;
  let h = height(tree);

  for (let i = 1; i <= h; i++) {
    printCurrentLevel(tree, i, ltr);
    ltr = !ltr;
  }
}
function printCurrentLevel(node, level, ltr) {
  if (root == null) return;

  if (level == 1) {
    document.write(node.key, " ");
  } else if (level > 1) {
    if (ltr) {
      printCurrentLevel(node.left, level - 1, ltr);
      printCurrentLevel(node.right, level - 1, ltr);
    } else {
      printCurrentLevel(node.right, level - 1, ltr);
      printCurrentLevel(node.left, level - 1, ltr);
    }
  }
}
function height(node) {
  if (node == null) return 0;
  else {
    let lheight = height(node.left);
    let rheight = height(node.right);

    if (lheight > rheight) return lheight + 1;
    else return rheight + 1;
  }
}
root = new Node(10);
root.left = new Node(11);
root.left.right = new Node(12);
root.left.left = new Node(7);
root.right = new Node(9);
root.right.left = new Node(15);
root.right.right = new Node(8);
levelOrderTraveralInSpiralForm(root);
