// Time complexity of this approach is O(n)
// Additional space O(Logn)

let MAX_SIZE = 100;

// A BST node
class Node {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

// Stack type
class Stack {
  constructor() {
    this.size = 0;
    this.top = 0;
    this.array;
  }
}

function createStack(size) {
  let stack = new Stack();
  stack.size = size;
  stack.top = -1;
  stack.array = new Array(stack.size);
  return stack;
}

function isFull(stack) {
  return stack.top - 1 == stack.size ? 1 : 0;
}

function isEmpty(stack) {
  return stack.top == -1 ? 1 : 0;
}

function push(stack, node) {
  if (isFull(stack) == 1) return;
  stack.array[++stack.top] = node;
}

function pop(stack) {
  if (isEmpty(stack) == 1) return null;
  return stack.array[stack.top--];
}

function isPairPresent(root, target) {
  // Create two stacks. s1 is used for
  // normal inorder traversal and s2 is
  // used for reverse inorder traversal
  let s1 = createStack(MAX_SIZE);
  let s2 = createStack(MAX_SIZE);

  let done1 = false,
    done2 = false;
  let val1 = 0,
    val2 = 0;
  let curr1 = root,
    curr2 = root;

  while (true) {
    while (done1 == false) {
      if (curr1 != null) {
        push(s1, curr1);
        curr1 = curr1.left;
      } else {
        if (isEmpty(s1) == 1) done1 = true;
        else {
          curr1 = pop(s1);
          val1 = curr1.val;
          curr1 = curr1.right;
          done1 = true;
        }
      }
    }
    while (done2 == false) {
      if (curr2 != null) {
        push(s2, curr2);
        curr2 = curr2.right;
      } else {
        if (isEmpty(s2) == 1) done2 = true;
        else {
          curr2 = pop(s2);
          val2 = curr2.val;
          curr2 = curr2.left;
          done2 = true;
        }
      }
    }
    if (val1 != val2 && val1 + val2 == target) {
      document.write(
        "Pair Found: " + val1 + "+ " + val2 + " = " + target + "<br>"
      );
      return true;
    } else if (val1 + val2 < target) done1 = false;
    else if (val1 + val2 > target) done2 = false;

    if (val1 >= val2) return false;
  }
}

let root = new Node(15);
root.left = new Node(10);
root.right = new Node(20);
root.left.left = new Node(8);
root.left.right = new Node(12);
root.right.left = new Node(16);
root.right.right = new Node(25);

let target = 33;
if (isPairPresent(root, target) == false)
  document.write("<br>No such values are found<br>");
