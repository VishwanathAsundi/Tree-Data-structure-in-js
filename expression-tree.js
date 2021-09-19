class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}
class ExpressionTree {
  isOperator(c) {
    if (c == "+" || c == "-" || c == "*" || c == "/" || c == "^") {
      return true;
    }
    return false;
  }
  inorder(node) {
    if (node == null) return;
    this.inorder(node.left);
    document.write(node.data);
    this.inorder(node.right);
  }
  preOrder(node) {
    if (node == null) return;
    document.write(node.data);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }
  constructTree(postFix) {
    let st = [];
    for (let i = 0; i < postFix.length; i++) {
      if (!this.isOperator(postFix[i])) {
        st.push(new Node(postFix[i]));
      } else {
        console.log(st);
        let t = new Node(postFix[i]);

        let t1 = st.pop();
        let t2 = st.pop();

        t.left = t2;
        t.right = t1;

        st.push(t);
      }
    }
    console.log(st);
    let t = st[st.length - 1];
    st.pop();
    return t;
  }
}
let postFixExp = "12+";
document.write("Post fix form of the expression : ", postFixExp, "<br/>");
let et = new ExpressionTree();
let postFixArray = postFixExp.split("");
let root = et.constructTree(postFixArray);
document.write("Infix form of the expression : ");
et.inorder(root);
document.write("<br/>Prefix form of the expression : ");
et.preOrder(root);
