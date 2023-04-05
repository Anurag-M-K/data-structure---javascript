// Define a node class for the tree nodes
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Define the binary tree class
  class BinaryTree {
    constructor() {
      this.root = null;
      this.size = 0;
    }
  
    // Insert a new node into the tree
    insert(value) {
      const node = new Node(value);
  
      if (!this.root) {
        this.root = node;
      } else {
        let current = this.root;
  
        while (current) {
          if (value < current.value) {
            if (!current.left) {
              current.left = node;
              break;
            }
            current = current.left;
          } else {
            if (!current.right) {
              current.right = node;
              break;
            }
            current = current.right;
          }
        }
      }
  
      this.size++;
    }
  
    // Search for a node with the given value
    search(value) {
      let current = this.root;
  
      while (current) {
        if (value === current.value) {
          return current;
        } else if (value < current.value) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
  
      return null;
    }
  
    // Traverse the tree in-order
    inOrderTraversal(callback) {
        const traverse = (node) => {
            if (node.left !== null) {
              traverse(node.left);
            }
            callback(node);
            if (node.right !== null) {
              traverse(node.right);
            }
          };
  
      traverse(this.root);
    }
  
    // Traverse the tree pre-order
    preOrderTraversal(callback) {
      const traverse = (node) => {
        callback(node);
        if (node.left) {
          traverse(node.left);
        }
        if (node.right) {
          traverse(node.right);
        }
      };
  
      traverse(this.root);
    }
  
    // Traverse the tree post-order
    postOrderTraversal(callback) {
      const traverse = (node) => {
        if (node.left) {
          traverse(node.left);
        }
        if (node.right) {
          traverse(node.right);
        }
        callback(node);
      };
  
      traverse(this.root);
    }
  
    // Find the minimum node in the tree
    findMin() {
      let current = this.root;
  
      while (current.left) {
        current = current.left;
      }
  
      return current;
    }
  
    // Find the maximum node in the tree
    findMax() {
      let current = this.root;
  
      while (current.right) {
        current = current.right;
      }
  
      return current;
    }
  
    // Get the height of the tree
    getHeight() {
      const getHeightRecursively = (node) => {
        if (!node) {
          return 0;
        }
  
        const leftHeight = getHeightRecursively(node.left);
        const rightHeight = getHeightRecursively(node.right);
  
        return 1 + Math.max(leftHeight, rightHeight);
      };
  
      return getHeightRecursively(this.root);
    }
  
    // Get the size of the tree
    getSize() {
      return this.size;
    }
    delete(value) {
        const removeNode = (node, value) => {
          if (!node) {
            return null;
          }
      
          if (value === node.value) {
            // Case 1: the node has no children
            if (!node.left && !node.right) {
              return null;
            }
      
            // Case 2: the node has one child
            if (!node.left) {
              return node.right;
            }
      
            if (!node.right) {
              return node.left;
            }
      
            // Case 3: the node has two children
            let tempNode = node.right;
            while (tempNode.left) {
              tempNode = tempNode.left;
            }
      
            node.value = tempNode.value;
            node.right = removeNode(node.right, tempNode.value);
            return node;
          }
      
          if (value < node.value) {
            node.left = removeNode(node.left, value);
            return node;
          }
      
          node.right = removeNode(node.right, value);
          return node;
        };
      
        this.root = removeNode(this.root, value);
        this.size--;
      }
      
}
const tree = new BinaryTree();
  
  tree.insert(8);
  tree.insert(3);
  tree.insert(10);
  tree.insert(1);
  tree.insert(6);
  tree.insert(14);
  tree.insert(4);
  tree.insert(7);
  tree.insert(13);
  tree.postOrderTraversal(node => {
    console.log(node.value)
  })