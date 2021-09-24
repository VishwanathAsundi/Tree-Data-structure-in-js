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
function reverseLevelOrder(root) {
  let height = getHeight(root);
  for (let i = height; i >= 1; i--) {
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
function reverseLevelOrderUsingStackAndQueue(root) {
  let s = [];
  let q = [];

  q.push(root);

  while (q.length != 0) {
    let temp = q.shift();
    s.push(temp);

    if (temp.right != null) {
      q.push(temp.right);
    }
    if (temp.left != null) {
      q.push(temp.left);
    }
  }
  while (s.length != 0) {
    let node = s.pop();
    document.write(node.key, " ");
  }
}

root = new Node(1);
root.left = new Node(2);
root.left.right = new Node(5);
root.left.left = new Node(4);
root.right = new Node(3);
root.right.left = new Node(6);
root.right.right = new Node(7);
document.write("Reverse Level order : ");
reverseLevelOrder(root);

document.write("<br/>Using Stack & Queue the reverse Level ordered List is : ");
reverseLevelOrderUsingStackAndQueue(root);
