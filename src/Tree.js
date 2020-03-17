function Node (value) {
    this.value = value;
    this.left = null;
    this.right = null;
};

function BST () {
    this.root = null;
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