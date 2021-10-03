class Node {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}
function insert(root, key) {
  if (root == null) {
    return new Node(key);
  }
  if (key < root.data) {
    root.left = insert(root.left, key);
  } else if (key > root.data) {
    root.right = insert(root.right, key);
  }
  return root;
}
function distanceFrom(root, key) {
  if (root.data == key) return 0;
  if (key < root.data) return 1 + distanceFrom(root.left, key);
  return 1 + distanceFrom(root.right, key);
}
function distanceBetween2(root, a, b) {
  if (root == null) return 0;
  if (root.data > a && root.data > b) {
    return distanceBetween2(root.left, a, b);
  } else if (root.data < a && root.data < b) {
    return distanceBetween2(root.right, a, b);
  }

  if (root.data >= a && root.data <= b) {
    return distanceFrom(root, a) + distanceFrom(root, b);
  }
  return 0;
}
function findDistWrapper(root, a, b) {
  let temp;
  if (a > b) {
    temp = a;
    a = b;
    b = temp;
  }
  return distanceBetween2(root, a, b);
}
var root = null;
root = insert(root, 20);
insert(root, 10);
insert(root, 5);
insert(root, 15);
insert(root, 30);
insert(root, 25);
insert(root, 35);
document.write(
  "Distance between node 5 and 35 is : ",
  findDistWrapper(root, 5, 35)
);
