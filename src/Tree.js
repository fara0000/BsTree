function Node (value) {
    this.value = value;
    this.left = null;
    this.right = null;
};

module.exports = Node;

function BST () {
    this.root = null;
};

module.exports = BST;

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

BST.prototype.addNode = function (value) {
    if (!value && value !== 0) {
        return '';
    }

    this.root = add(this.root, value);
    function add(node, value) {
        if (!node) {
            return new Node(value);
        } else if (value < node.value) {
            node.left = add(node.left, value);
        } else {
            node.right = add(node.right, value);
        }

        return node;
    }
};

BST.prototype.init = function (array) {
    for (let i = 0; i < array.length; i++) {
        this.addNode(array[i]);
    }
};

BST.prototype.clearBST = function () {
    this.root = null;
};

BST.prototype.toArray = function() {
    return toArrayNode(this.root);
};

function toArrayNode(node) {
    if (!node) {
        return [];
    }

    const left = toArrayNode(node.left);
    const right = toArrayNode(node.right);

    return [...left, node.value, ...right];
};

BST.prototype.toString = function() {
    return toStringNode(this.root);
};

function toStringNode(node) {
    if (!node) {
        return '';
    }

    const left = toStringNode(node.left);
    const right = toStringNode(node.right);

    return `${left + node.value + ', ' + right}`;
};
