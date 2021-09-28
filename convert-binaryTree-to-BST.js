class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

// index pointer to pointer to the array index
let index = 0;

/* Utility function to create a new Binary Tree node */
function newNode(data) {
  let temp = new Node(data);
  return temp;
}

/* Utility function to print inorder
	traversal of Binary Tree */
function printInorder(node) {
  if (node == null) return;

  /* first recur on left child */
  printInorder(node.left);

  /* then print the data of node */
  document.write(node.data + " ");

  /* now recur on right child */
  printInorder(node.right);
}

/* A helper function that copies
	contents of arr[] to Binary Tree.
	This function basically does Inorder
	traversal of Binary Tree and
	one by one copy arr[] elements to Binary Tree nodes */
function arrayToBST(arr, root) {
  // Base Case
  if (root == null) return;

  /* first update the left subtree */
  arrayToBST(arr, root.left);

  /* Now update root's data and increment index */
  root.data = arr[index];
  index++;

  /* finally update the right subtree */
  arrayToBST(arr, root.right);
}

/* A helper function that stores inorder
	traversal of a tree rooted with node */
function storeInorder(node, inorder) {
  // Base Case
  if (node == null) return inorder;

  /* first store the left subtree */
  storeInorder(node.left, inorder);

  /* Copy the root's data */
  inorder[index] = node.data;
  index++; // increase index for next entry

  /* finally store the right subtree */
  storeInorder(node.right, inorder);
}

/* A helper function to count nodes in a Binary Tree */
function countNodes(root) {
  if (root == null) return 0;
  return countNodes(root.left) + countNodes(root.right) + 1;
}

// This function converts a given Binary Tree to BST
function binaryTreeToBST(root) {
  // base case: tree is empty
  if (root == null) return;

  /* Count the number of nodes in Binary Tree so that
		we know the size of temporary array to be created */
  let n = countNodes(root);

  // Create a temp array arr[] and store
  // inorder traversal of tree in arr[]
  let arr = new Array(n);
  arr.fill(0);

  storeInorder(root, arr);

  // Sort the array using library function for quick sort
  arr.sort(function(a, b) {
    return a - b;
  });

  // Copy array elements back to Binary Tree
  index = 0;
  arrayToBST(arr, root);
}

let root = null;

/* Constructing tree given in the above figure
			10
			/ \
			30 15
		/	 \
		20	 5 */
root = newNode(10);
root.left = newNode(30);
root.right = newNode(15);
root.left.left = newNode(20);
root.right.right = newNode(5);

// convert Binary Tree to BST
binaryTreeToBST(root);

document.write(
  "Following is Inorder Traversal of the converted BST: " + "</br>"
);
printInorder(root);
