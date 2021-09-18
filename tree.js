class Node {
  constructor(key) {
    this.left = null;
    this.right = null;
    this.key = key;
  }
}
let root;
let temp = root;

function inorder(root) {
  if (root == null) return;
  inorder(root.left);
  document.write(root.key, " ");
  inorder(root.right);
}

function deleteRightMostNode(root, deleteNode) {
  let q = [];
  q.push(root);

  let temp = null;
  while (q.length > 0) {
    temp = q[0];
    q.shift();

    if (temp == deleteNode) {
      temp = null;
      return;
    }

    if (temp.left != null) {
      if (temp.left == deleteNode) {
        temp.left = null;
        return;
      } else {
        q.push(temp.left);
      }
    }
    if (temp.right != null) {
      if (temp.right == deleteNode) {
        temp.right = null;
        return;
      } else {
        q.push(temp.right);
      }
    }
  }
}

function DeleteNode(root, key) {
  if (root == null) {
    return;
  }

  if (root.left == null && root.right == null) {
    if (root.key == key) {
      root = null;
      return;
    } else return;
  }
  // treverse the tree in level order and find keyNode and last right most node
  let q = [];
  q.push(root);
  let temp = null,
    keyNode = null;

  while (q.length > 0) {
    temp = q[0];
    q.shift();

    if (temp.key == key) {
      keyNode = temp;
    }
    if (temp.left != null) {
      q.push(temp.left);
    }
    if (temp.right != null) {
      q.push(temp.right);
    }
  }
  if (keyNode != null) {
    // temp holds the last node of right subtree
    let x = temp.key;
    deleteRightMostNode(root, temp);
    keyNode.key = x;
  }
}

root = new Node(10);
root.left = new Node(11);
root.left.right = new Node(12);
root.left.left = new Node(7);
root.right = new Node(9);
root.right.left = new Node(15);
root.right.right = new Node(8);

document.write("Inorder traversal of a tree before Deletion   : ");
inorder(root);

let key = 11;
DeleteNode(root, key);
document.write("\n");
document.write("<br/>", "Inorder traversal of a tree After Deletion   : ");

key = 10;
DeleteNode(root, key);
document.write("\n");
document.write("<br/>", "Inorder traversal of a tree After Deletion   : ");
inorder(root);
