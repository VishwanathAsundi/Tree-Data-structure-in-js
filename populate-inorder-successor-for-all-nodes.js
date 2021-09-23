class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
let root;
let next = null;

function populateSuccessor(node) {
  if (node != null) {
    populateSuccessor(node.right);
    node.next = next;
    next = node;
    populateSuccessor(node.left);
  }
}

root = new Node(10);
root.left = new Node(8);
root.left.left = new Node(3);
root.right = new Node(12);

let p = populateSuccessor(root);

let ptr = root.left.left;
while (ptr != null) {
  let print = ptr.next != null ? ptr.next.data : -1;
  document.write("Successor of node ", ptr.data, " is ", print, "</br>");
  ptr = ptr.next;
}
