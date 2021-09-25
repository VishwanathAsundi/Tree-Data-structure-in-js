class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}
function iterativePreOrder(root) {
  if (root == null) return;

  let st = [];
  st.push(root);

  while (st.length > 0) {
    let temp = st.pop();
    document.write(temp.data, " ");

    if (temp.right != null) {
      st.push(temp.right);
    }
    if (temp.left != null) {
      st.push(temp.left);
    }
  }
}
function preOrder(root) {
  if (root == null) return;
  document.write(root.data, " ");
  preOrder(root.left);
  preOrder(root.right);
}
let root;
root = new Node(1);
root.left = new Node(2);
root.left.right = new Node(5);
root.left.left = new Node(4);
root.right = new Node(3);
root.right.left = new Node(6);
root.right.right = new Node(7);
document.write("Iterative pre order of binary tree  : ");
iterativePreOrder(root);
document.write("<br/>");
preOrder(root);
