class TreeNode {
  value: number | string;
  right: null | TreeNode;
  left: null | TreeNode;

  constructor(value: number | string) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  root: null | TreeNode;
  size: number;
  constructor() {
    this.root = null;
    this.size = 0;
  }

  // Insert
  insert(value: number | string) {
    // check for null
    if (value === null || typeof value === "undefined") {
      return false;
    }
    const newNode = new TreeNode(value);

    // check if Tree is empty
    if (this.size <= 0) {
      // if yes, make new node the root and return
      this.root = newNode;
      this.size = 1;
      return true;
    }

    // otherwise, place in left most bottom spot
    // Use level order traversal to find first empty node
    const queue: TreeNode[] = [];
    queue.push(this.root as TreeNode);
    while (queue.length) {
      const currentNode = queue.shift() as TreeNode;
      if (currentNode.left) {
        queue.push(currentNode.left);
      } else {
        currentNode.left = newNode;
        this.size++;
        return true;
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      } else {
        currentNode.right = newNode;
        this.size++;
        return true;
      }
    }
  }

  // Delete
  // Use postorder traversal and delete the first node of given value
  // This favors deleting the "lowest" node in the tree
  deleteOne(value: number | string) {}

  deleteAll(value: number | string) {}

  // Find

  // Traversal
}

const tree = new BinaryTree();
tree.insert(5);
tree.insert(4);
tree.insert(6);
console.log(tree);
