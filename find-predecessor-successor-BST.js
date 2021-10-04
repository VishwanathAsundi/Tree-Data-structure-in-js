class Node {
  constructor(key) {
    this.key = key;
    this.left = this.right = null;
  }
}

var pre = new Node(),
  suc = new Node();

function insert(node, key) {
  if (node == null) return new Node(key);
  if (key < node.key) node.left = insert(node.left, key);
  else node.right = insert(node.right, key);

  return node;
}
function findPreSuc(root, key) {
  if (root == null) return;

  if (root.key == key) {
    let temp = root.left;
    while (temp.right != null) {
      temp = temp.right;
    }
    pre = temp;

    temp = root.right;
    while (temp.left != null) {
      temp = temp.left;
    }
    suc = temp;
    return;
  }

  if (key < root.key) {
    suc = root;
    findPreSuc(root.left, key);
  } else {
    pre = root;
    findPreSuc(root.right, key);
  }
}
var key = 50;

/*
 *          50
 *         /  \
 *        30   70
 *       /  \ /  \
 *      20 40 60  80
 */

var root = new Node();
root = insert(root, 50);
insert(root, 30);
insert(root, 20);
insert(root, 40);
insert(root, 70);
insert(root, 60);
insert(root, 80);

findPreSuc(root, key);
if (pre != null) document.write("Predecessor is " + pre.key);
else document.write("No Predecessor");

if (suc != null) document.write("<br/>Successor is " + suc.key);
else document.write("<br/>No Successor");
