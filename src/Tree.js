function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
};

function BST () {
    this.root = null;
    this.size = 0;
};

BST.prototype.addNode = function (value) {
    this.size++;

    if(!value && value !== 0) {
        return;
    };

    this.root = add(this.root, value);

    function add(rootElm, value) {
        if (!rootElm) {
            return new Node(value);
        } else if (value < rootElm.value) {
            rootElm.left = add(rootElm.left, value)
        } else {
            rootElm.right = add(rootElm.right, value)
        }

        return rootElm;
    }
}

module.exports = Node;

module.exports = BST;
