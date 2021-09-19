class Node {
  constructor(key) {
    this.left = null;
    this.right = null;
    this.key = key;
  }
}
let root;
function eval(root) {
  if (root == null) return 0;
  if (root.left == null && root.right == null) return parseInt(root.key);

  let l_eval = eval(root.left);
  let r_eval = eval(root.right);

  if (root.key == "+") return l_eval + r_eval;
  if (root.key == "*") return l_eval * r_eval;
  if (root.key == "-") return l_eval - r_eval;
  if (root.key == "/") return l_eval / r_eval;
}

root = new Node("+");
root.left = new Node("*");
root.left.left = new Node("5");
root.left.right = new Node("-4");
root.right = new Node("-");
root.right.left = new Node("100");
root.right.right = new Node("20");
document.write(eval(root));
