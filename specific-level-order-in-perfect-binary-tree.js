class Node {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}
function printSpecificLevelUtil(root, s) {
  if (root == null) return;

  let q = [];
  q.push(root.left);
  q.push(root.right);

  while (q.length > 0) {
    let first = q.shift();
    let second = q.shift();

    s.push(second.left);
    s.push(first.right);
    s.push(second.right);
    s.push(first.left);

    if (first.left.left != null) {
      q.push(first.right);
      q.push(second.left);
      q.push(first.left);
      q.push(second.right);
    }
  }
}
function specificLevelOrderTraversal(root) {
  if (root == null) return;
  let s = [];
  s.push(root);

  if (root.left != null) {
    s.push(root.right);
    s.push(root.left);
  }

  if (root.left.left != null) {
    printSpecificLevelUtil(root, s);
  }

  while (s.length > 0) {
    document.write(s.pop().data, " ");
  }
}
let root;
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.left.left.left = new Node(9);
root.left.left.right = new Node(12);
root.left.right.left = new Node(15);
root.left.right.right = new Node(18);
root.right.left.left = new Node(21);
root.right.left.right = new Node(22);
root.right.right.left = new Node(25);
root.right.right.right = new Node(30);

document.write("Specific Level order traversal of Perfect Binary tree is: ");
specificLevelOrderTraversal(root);
