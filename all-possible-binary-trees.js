// Javascript program to find binary tree
// with given inorder traversal

/* Class containing left and right
child of current node and key value*/
class Node {
  constructor(item) {
    this.data = item;
    this.left = null;
    this.right = null;
  }
}

/* Class to print Level Order Traversal */

var root = null;

// A utility function to do
// preorder traversal of BST
function preOrder(node) {
  if (node != null) {
    document.write(node.data + " ");
    preOrder(node.left);
    preOrder(node.right);
  }
}

// Function for constructing all possible
// trees with given inorder traversal
// stored in an array from arr[start] to
// arr[end]. This function returns a
// vector of trees.
function getTrees(arr, start, end) {
  // List to store all possible trees
  var trees = [];

  /* if start > end then subtree will be
	empty so returning NULL in the list */
  if (start > end) {
    trees.push(null);
    return trees;
  }

  /* Iterating through all values from
	start to end for constructing left
	and right subtree recursively */
  for (var i = start; i <= end; i++) {
    /* Constructing left subtree */
    var ltrees = getTrees(arr, start, i - 1);

    /* Constructing right subtree */
    var rtrees = getTrees(arr, i + 1, end);

    /* Now looping through all left and
		right subtrees and connecting them
		to ith root below */
    for (var j = 0; j < ltrees.length; j++) {
      for (var k = 0; k < rtrees.length; k++) {
        // Making arr[i] as root
        var node = new Node(arr[i]);

        // Connecting left subtree
        node.left = ltrees[j];

        // Connecting right subtree
        node.right = rtrees[k];

        // Adding this tree to list
        trees.push(node);
      }
    }
  }
  return trees;
}

// Driver Code
var arr = [4, 5, 7];
var n = arr.length;
var trees = getTrees(arr, 0, n - 1);
document.write("Preorder traversal of different " + " binary trees are:<br>");
for (var i = 0; i < trees.length; i++) {
  preOrder(trees[i]);
  document.write("<br>");
}
