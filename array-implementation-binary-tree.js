// array implementation of a tree 0 to (n-1)
let tree = new Array(10).fill(0);
console.log(tree);
function root(key) {
  tree[0] = key;
  return;
}
function setLeft(key, parent) {
  if (tree[parent] == 0) {
    document.write(
      "<br/>",
      "Can't set child at :",
      2 * parent + 1,
      "  No parent exists"
    );
    return;
  }
  tree[2 * parent + 1] = key;
  return;
}
function setRight(key, parent) {
  if (tree[parent] == 0) {
    document.write(
      "<br/>",
      "Can't set child at :",
      2 * parent + 2,
      " No parent exists"
    );
    return;
  }
  tree[2 * parent + 2] = key;
  return;
}
function printTree() {
  document.write("<br/>");
  for (let i = 0; i < 10; i++) {
    if (tree[i] !== 0) {
      document.write(tree[i]);
    } else {
      document.write("-");
    }
  }
  return;
}
root("A");
setLeft("G", 0);
setLeft("D", 1);
setRight("E", 1);
setRight("F", 2);
printTree();
