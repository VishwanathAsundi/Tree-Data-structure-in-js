let preIndex = 0;
function printPostOrder(inO, preO, inStart, inEnd, hm) {
  if (inStart > inEnd) return;

  let inIndex = hm.get(preO[preIndex++]);

  //Traverse left subtree
  printPostOrder(inO, preO, inStart, inIndex - 1, hm);

  //Traverse right subtree from root node
  printPostOrder(inO, preO, inIndex + 1, inEnd, hm);

  //print root node at the end of traversal
  document.write(inO[inIndex], " ");
}
function printPostMain(inO, preO) {
  let n = inO.length;
  let hm = new Map();

  for (let i = 0; i < n; i++) {
    hm.set(inO[i], i);
  }

  return printPostOrder(inO, preO, 0, n - 1, hm);
}
let inOrder = [4, 2, 5, 1, 3, 6];
let preOrder = [1, 2, 4, 5, 3, 6];
document.write("In : [", inOrder, "]");
document.write("<br/>Pre : [", preOrder, "]");
document.write("<br/>Post : [");

printPostMain(inOrder, preOrder);
document.write("]");
