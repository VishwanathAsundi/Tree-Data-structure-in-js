class Node {
  constructor() {
    this.key = 0;
    this.left = null;
    this.right = null;
  }
}
// Removes all nodes having value
// outside the given range
function removeOutsideRange(root, min, max) {
  if (root == null) {
    return null;
  }

  // FIRST FIX THE LEFT AND
  // RIGHT SUBTREE OF ROOT
  root.left = removeOutsideRange(root.left, min, max);
  root.right = removeOutsideRange(root.right, min, max);

  if (root.key < min) {
    var rchild = root.right;
    root = null;
    return rchild;
  }

  if (root.key > max) {
    var lchild = root.left;
    root = null;
    return lchild;
  }

  return root;
}

function newNode(num) {
  var temp = new Node();
  temp.key = num;
  temp.left = null;
  temp.right = null;
  return temp;
}

function insert(root, key) {
  if (root == null) {
    return newNode(key);
  }
  if (root.key > key) {
    root.left = insert(root.left, key);
  } else {
    root.right = insert(root.right, key);
  }
  return root;
}

function inorderTraversal(root) {
  if (root != null) {
    inorderTraversal(root.left);
    document.write(root.key + " ");
    inorderTraversal(root.right);
  }
}

// Driver code

var root = null;
root = insert(root, 6);
root = insert(root, -13);
root = insert(root, 14);
root = insert(root, -8);
root = insert(root, 15);
root = insert(root, 13);
root = insert(root, 7);

document.write("Inorder Traversal of " + "the given tree is: ");
inorderTraversal(root);

root = removeOutsideRange(root, -10, 13);

document.write("<br/>Inorder traversal of " + "the modified tree: ");
inorderTraversal(root);
