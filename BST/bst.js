class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  bstFind(value) {
    if (this.root === null) return false;
    var current = this.root;
    var found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }


  BFS() {
    var node = this.root,
      data = [];
    var queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    var data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  DFSPostOrder() {
    var data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
  DFSInOrder() {
    var data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  delete(value) {
    if (!this.root) {
      return undefined;
    }

    let current = this.root;
    let parent = null;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        parent = current;
        current = current.left;
      } else if (value > current.value) {
        parent = current;
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) {
      return undefined;
    }

    // Case 1: The node has no children
    if (!current.left && !current.right) {
      if (current === this.root) {
        this.root = null;
      } else if (current === parent.left) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }
    // Case 2: The node has one child
    else if (!current.left || !current.right) {
      const child = current.left || current.right;

      if (current === this.root) {
        this.root = child;
      } else if (current === parent.left) {
        parent.left = child;
      } else {
        parent.right = child;
      }
    }
    // Case 3: The node has two children
    else {
      const successor = this.findSuccessor(current);
      const temp = successor.value;

      this.delete(successor.value);
      current.value = temp;
    }

    return current;
  }

  findSuccessor(node) {
    let current = node.right;
    let parent = node;

    while (current.left) {
      parent = current;
      current = current.left;
    }

    return current;
  }
}
var tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.DFSPreOrder();
tree.DFSPostOrder();
tree.DFSInOrder();
