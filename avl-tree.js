// AVL tree is a self-balancing Binary Search Tree (BST) where the difference between heights of left and right subtrees cannot be more than one for all nodes. 

// Most of the BST operations (e.g., search, max, min, insert, delete.. etc) take O(h) time where h is the height of the BST. The cost of these operations may become O(n) for a skewed Binary tree. If we make sure that height of the tree remains O(Logn) after every insertion and deletion, then we can guarantee an upper bound of O(Logn) for all these operations. The height of an AVL tree is always O(Logn) where n is the number of nodes in the tree

class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}
class AVLTree {
    constructor() {
        this.root = null;
    }
    getBalancedHeight(node) {
        if (node == null) return 0;
        return this.height(node.left) - this.height(node.right);
    }
    // Constant time
    rightRotate(x) {
        let y = x.left;
        let T2 = y.right;

        y.right = x;
        x.left = T2;

        x.height = 1 + Math.max(this.height(x.left), this.height(x.right));
        y.height = 1 + Math.max(this.height(y.left), this.height(y.right));

        return y;
    }
    // Constant time
    leftRotate(x) {
        let y = x.right;
        let T2 = y.left;

        y.left = x;
        x.right = T2;

        x.height = 1 + Math.max(this.height(x.left), this.height(x.right));
        y.height = 1 + Math.max(this.height(y.left), this.height(y.right));

        return y;
    }
    height(node) {
        if (node == null) return 0;
        return node.height;
    }
    //Time O(Logn)
    insert(node, key) {
        if (node == null) return new Node(key);

        if (key < node.key) {
            node.left = this.insert(node.left, key);
        } else if (key > node.key) {
            node.right = this.insert(node.right, key);
        } else return node;

        node.height = 1 + Math.max(this.height(node.left), this.height(node.right));

        let balance = this.getBalancedHeight(node);

        // Left left case
        if (balance > 1 && key < node.left.key) {
            return this.rightRotate(node);
        }

        // Right right case
        if (balance < -1 && key > node.right.key) {
            return this.leftRotate(node);
        }

        // Left Right case         
        if (balance > 1 && key > node.left.key) {
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node);
        }

        // Right Left case
        if (balance < -1 && key < node.right.key) {
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node);
        }
        return node;
    }
    preOrder(root) {
        if (root == null) return;

        document.write(root.key, ", ");
        this.preOrder(root.left);
        this.preOrder(root.right);
    }
}




var tree = new AVLTree();

/* Constructing tree given in the above figure */
tree.root = tree.insert(tree.root, 10);
tree.root = tree.insert(tree.root, 20);
tree.root = tree.insert(tree.root, 30);
tree.root = tree.insert(tree.root, 40);
tree.root = tree.insert(tree.root, 50);
tree.root = tree.insert(tree.root, 25);

/* The constructed AVL Tree would be
      30
      / \
     20 40
    / \   \
   10 25  50
  */
document.write(
    "Preorder traversal of the " + "constructed AVL tree is <br>"
);
tree.preOrder(tree.root);