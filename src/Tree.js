function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
};

module.exports = Node;

function BST () {
    this.root = null;
    this.size = 0;
};

module.exports = BST;

BST.prototype.addNode = function(value) {
    this.size++;
    const node = this.root;

    if(node === null) {
        this.root = new Node(value);
        return;
    } else {
        const searchTree = function (node) {
            if (value < node.value) {
                if (node.left === null) {
                    node.left = new Node (value);
                } else if ( node.left !== null) {
                    return searchTree(node.left);
                }
            } else if (value > node.value) {
                if (node. right === null) {
                    node.right = new Node (value);
                } else if (node.right !== null) {
                    return searchTree(node.right);
                }
            } else {
                return null;
            }
        }

        return searchTree(node);
    }
};

BST.prototype.clear = function (node) {
    this.root = 0;
    this.size = 0;
};

BST.prototype.init = function (array) {
    for(i = 0; i < array.length; i++) {
        this.addNode(array[i]);
    }
};

BST.prototype.findNode = function (value) {
    let currentNode = this.root;
    while (currentNode) {
        if (value === currentNode.value) {
            return true;
        }
        if (value < currentNode.value) {
            currentNode = currentNode.left
        } else {
            currentNode = currentNode.right;
        }
    }
    return false;
}; 

BST.prototype.getSize = function() {
    return this.size;
};

// BST.prototype.Delete = function(value) {
//     let removeNode = function(node, value) {
//     if (node == null) {
//     return null;
//     }
//     if (value == node.value) {
//     //if node has no children
//     if (node.left == null && node.right == null) {
//     return null;
//     }
//     //if node has no left child
//     if (node.left == null) {
//     return node.right;
//     }
//     //if node has no right child
//     if (node.right == null) {
//     return node.left;
//     }
//     //node has two children
//     var tempNode = node.right;
//     while (tempNode.left !== null) {
//     tempNode = tempNode.left;
//     }
//     node.value = tempNode.value;
//     node.right = removeNode (node.right, tempNode.value);
//     return node;
//     } else if (value < node.value) {
//     node.left = removeNode (node.left, value);
//     return node;
//     } else {
//     node.right = removeNode (node.right, value);
//     return node;
//     }
//     }
//     this.root = removeNode(this.root, value);
//     };




