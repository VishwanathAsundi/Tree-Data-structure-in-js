class Node {
  constructor(key) {
    this.left = null;
    this.right = null;
    this.key = key;
  }
}
let root;

function inorder(root) {
  let current = root;
  let done = false;
  let st = [];
  while (!done) {
    if (current != null) {
      st.push(current);
      current = current.left;
    } else {
      if (st.length > 0) {
        current = st.pop();
        document.write(current.key, " ");

        current = current.right;
      } else {
        done = true;
      }
    }
  }
}

root = new Node(10);
root.left = new Node(11);
root.left.right = new Node(12);
root.left.left = new Node(7);
root.right = new Node(9);
root.right.left = new Node(15);
root.right.right = new Node(8);

document.write("Inorder traversal of a tree Without using Recursion   : ");
inorder(root);
