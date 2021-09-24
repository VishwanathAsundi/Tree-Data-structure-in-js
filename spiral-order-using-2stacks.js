class Node {
  constructor(key) {
    this.left = null;
    this.right = null;
    this.key = key;
  }
}
let root;

function spiralOrder(root) {
  let s1 = []; // printing left to right
  let s2 = []; // printing right to left

  if (root == null) return;

  s1.push(root);
  while (s1.length > 0 || s2.length > 0) {
    while (s1.length > 0) {
      let temp = s1.pop();
      document.write(temp.key, " ");

      if (temp.right != null) {
        s2.push(temp.right);
      }
      if (temp.left != null) {
        s2.push(temp.left);
      }
    }
    while (s2.length > 0) {
      let temp = s2.pop();
      document.write(temp.key, " ");

      if (temp.left != null) {
        s1.push(temp.left);
      }
      if (temp.right != null) {
        s1.push(temp.right);
      }
    }
  }
}

root = new Node(1);
root.left = new Node(2);
root.left.right = new Node(6);
root.left.left = new Node(7);
root.right = new Node(3);
root.right.left = new Node(5);
root.right.right = new Node(4);

spiralOrder(root);
