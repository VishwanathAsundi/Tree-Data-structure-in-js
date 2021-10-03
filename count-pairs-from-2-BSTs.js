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
let map = {};
let pairs = 0;
function inorder(node, isStore, sum) {
  if (node == null) return;

  inorder(node.left, isStore, sum);
  if (isStore) map[node.data] = node.data;
  else {
    let diff = Math.abs(sum - node.data);
    if (map[diff]) {
      document.write("{", node.data, ",", diff, "} ");
      pairs++;
    }
  }
  inorder(node.right, isStore, sum);
}
function findSumOfPairs(root1, root2, sum) {
  inorder(root2, true, sum);
  inorder(root1, false, sum);
  return pairs;
}
var root1 = null;
root1 = insert(root1, 5);
insert(root1, 3);
insert(root1, 2);
insert(root1, 4);
insert(root1, 7);
insert(root1, 6);
insert(root1, 8);

let root2 = null;
root2 = insert(root2, 10);
insert(root2, 6);
insert(root2, 3);
insert(root2, 8);
insert(root2, 15);
insert(root2, 11);
insert(root2, 18);

let sum = 16;
document.write(
  "<br/>Number of pairs in 2 BST's whose sum is 16 : ",
  findSumOfPairs(root1, root2, sum)
);
