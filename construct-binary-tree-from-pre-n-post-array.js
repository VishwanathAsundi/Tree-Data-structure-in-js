// Javascript program for construction
// of full binary tree

// variable to hold index in pre[] array
var preindex = 0;

class node {
  constructor(data) {
    this.data = data;
  }
}

// A recursive function to construct Full
// from pre[] and post[]. preIndex is used
// to keep track of index in pre[]. l is
// low index and h is high index for the
// current subarray in post[]
function constructTreeUtil(pre, post, l, h, size) {
  // Base case
  if (preindex >= size || l > h) {
    return null;
  }

  // The first node in preorder traversal is
  // root. So take the node at preIndex from
  // preorder and make it root, and increment
  // preIndex
  var root = new node(pre[preindex]);
  preindex++;

  // If the current subarray has only one
  // element, no need to recur or
  // preIndex > size after incrementing
  if (l == h || preindex >= size) {
    return root;
  }
  var i;

  // Search the next element
  // of pre[] in post[]
  for (i = l; i <= h; i++) {
    if (post[i] == pre[preindex]) {
      break;
    }
  }

  // Use the index of element found
  // in postorder to divide postorder
  // array in two parts. Left subtree
  // and right subtree
  if (i <= h) {
    root.left = constructTreeUtil(pre, post, l, i, size);
    root.right = constructTreeUtil(pre, post, i + 1, h - 1, size);
  }
  return root;
}

// The main function to construct Full
// Binary Tree from given preorder and
// postorder traversals. This function
// mainly uses constructTreeUtil()
function constructTree(pre, post, size) {
  preindex = 0;
  return constructTreeUtil(pre, post, 0, size - 1, size);
}

function printInorder(root) {
  if (root == null) {
    return;
  }
  printInorder(root.left);
  document.write(root.data + " ");
  printInorder(root.right);
}

// Driver Code
var pre = [1, 2, 4, 8, 9, 5, 3, 6, 7];
var post = [8, 9, 4, 5, 2, 6, 7, 3, 1];
var size = pre.length;
var root = constructTree(pre, post, size);
document.write("Inorder traversal of " + "the constructed tree:<br>");
printInorder(root);
