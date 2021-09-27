class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Node {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}
class BinaryTree {
  constructor() {
    this.head = null;
    this.root = null;
  }
  printList() {
    let temp = this.head;
    while (temp != null) {
      document.write(temp.data, " ");
      temp = temp.next;
    }
  }
  push(data) {
    let newNode = new LinkedListNode(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  constructBinaryTree(node) {
    if (this.head == null) {
      node = null;
      return;
    }
    if (this.head.next == null) {
      return new Node(this.head.data);
    }
    let q = [];
    node = new Node(this.head.data);
    q.push(node);
    this.head = this.head.next;

    while (this.head != null) {
      let parent = q.shift();
      let leftChild = null,
        rightChild = null;

      leftChild = new Node(this.head.data);
      q.push(leftChild);
      this.head = this.head.next;

      if (this.head != null) {
        rightChild = new Node(this.head.data);
        q.push(rightChild);
        this.head = this.head.next;
      }
      parent.left = leftChild;
      parent.right = rightChild;
    }
    return node;
  }
}
function printInorder(root) {
  if (root == null) return;
  printInorder(root.left);
  document.write(root.data, " ");
  printInorder(root.right);
}
let tree = new BinaryTree();
tree.push(36);
tree.push(30);
tree.push(25);
tree.push(15);
tree.push(12);
tree.push(10);

document.write("Linked List :");
tree.printList();

let node = tree.constructBinaryTree(tree);
document.write(
  "<br/>Inorder traversal of constructed binary tree from Linked list is :"
);
printInorder(node);
