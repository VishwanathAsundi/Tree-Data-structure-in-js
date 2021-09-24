class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
let root;
function height(node) {
  if (node == null) return 0;
  else {
    let lheight = height(node.left);
    let rheight = height(node.right);

    if (lheight > rheight) return lheight + 1;
    else return rheight + 1;
  }
}
function printLevelOrder(node, level, ltr) {
  if (node == null) return;
  if (level == 1) {
    document.write(node.data, " ");
  } else if (level > 1) {
    if (ltr) {
      printLevelOrder(node.left, level - 1, ltr);
      printLevelOrder(node.right, level - 1, ltr);
    } else {
      printLevelOrder(node.right, level - 1, ltr);
      printLevelOrder(node.left, level - 1, ltr);
    }
  }
}

function levelOrderOnEveryLevels(root, levels) {
  let ltr = true;
  let count = 0;
  let h = height(root);
  for (let i = 1; i <= h; i++) {
    count++;
    printLevelOrder(root, i, ltr);
    if (count % levels == 0) {
      ltr = !ltr;
    }
  }
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.left.left.left = new Node(8);
root.left.left.right = new Node(9);
root.left.right.left = new Node(3);
root.left.right.right = new Node(1);
root.right.left.left = new Node(4);
root.right.left.right = new Node(2);
root.right.right.left = new Node(7);
root.right.right.right = new Node(2);
root.left.right.left.left = new Node(16);
root.left.right.left.right = new Node(17);
root.right.left.right.left = new Node(18);
root.right.right.left.right = new Node(19);
let levels = 2;
levelOrderOnEveryLevels(root, levels);
