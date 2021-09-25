class Node {
  constructor(key) {
    this.left = null;
    this.right = null;
    this.key = key;
  }
}
let root;
function diagonalTraverse(root){
    if(root==null) return;

    let cur=root;
    let q=[];

    while(q.length>0 || cur!=null){
        if(cur!=null){
            document.write(cur.key," ");
            if(cur.left!=null){
                q.push(cur.left);
            }
            cur=cur.right;
        }else{
            cur=q.shift();
        }

    }
}


root = new Node(1);
root.left = new Node(2);
root.left.right = new Node(5);
root.left.left = new Node(4);
root.right = new Node(3);
root.right.left = new Node(6);
root.right.right = new Node(7);
document.write("Diagonal traversal of a tree is: ");
diagonalTraverse(root);