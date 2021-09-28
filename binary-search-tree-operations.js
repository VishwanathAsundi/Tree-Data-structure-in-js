class Node {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}
let root = null;
function insert(key) {
  root = insertRec(root, key);
}
function insertRec(root, key) {
  if (root == null) {
    root = new Node(key);
    return root;
  }
  if (key < root.data) {
    root.left = insertRec(root.left, key);
  } else {
    root.right = insertRec(root.right, key);
  }
  return root;
}
function inorder() {
  inorderRec(root);
}
function inorderRec(root) {
  if (root == null) return;
  inorderRec(root.left);
  document.write(root.data + " ");
  inorderRec(root.right);
}
function deleteKey(key) {
  deleteRec(root, key);
}
function deleteRec(root, key) {
  if (root == null) {
    return;
  }
  if (key < root.data) {
    root.left = deleteRec(root.left, key);
  } else if (key > root.data) {
    root.right = deleteRec(root.right, key);
  } else {
    //node with 1 child or 0 child
    if (root.left == null) {
      return root.right;
    } else if (root.right == null) {
      return root.left;
    }

    //Find inorder successor if node has both children (find minValue in right subtree from the current node)
    root.data = minValue(root.right);

    // Delete inorder successor of replaced key
    root.right = deleteRec(root.right, root.data);
  }
  return root;
}
function minValue(root) {
  // Min value is found at left sub tree
  let min = root.data;
  while (root.left != null) {
    min = root.left.data;
    root = root.left;
  }
  return min;
}

insert(50);
insert(30);
insert(20);
insert(40);
insert(70);
insert(60);
insert(80);

document.write("Inorder traversal of BST is : ");
inorder();

deleteKey(20);
document.write("<br/><br/>After deletion of 20 :");
inorder();

deleteKey(30);
document.write("<br/><br/>After deletion of 30 :");
inorder();

deleteKey(50);
document.write("<br/><br/>After deletion of 50 :");
inorder();
