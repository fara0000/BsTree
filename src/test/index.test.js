const { assert } = require ('chai');
const Node = require ('../Tree');
const BST = require ('../Tree');

describe('Binary Search Tree tests', () => {

    describe('function Node', () => {
        it('function Node defined',() => {
            assert.isDefined(Node);
        });
    });

    describe('function BST', () => {
        it('function BST defined', () => {
            assert.isDefined(BST);
        });
    });

    describe('BST method addNode', () => {
        it('addNode defined',() => {
            let test = new BST();

            assert.isDefined(BST.prototype.addNode);
        });

        it('method addNode works correctly in empty tree', () => {
            let test = new BST();
            let array = [];
            test.init(array);
            const expected = 1;
            const expectedSize = 1;
            
            const actual = test.addNode((1));

            assert.deepEqual(test.getSize(), expectedSize);
        });

        it('method addNode works correctly when tree have 1 node', () => {
            let test = new BST();
            let array = [1];
            test.init(array);
            const expectedSize = 2;
            
            const actual = test.addNode(2);

            assert.deepEqual(test.getSize(), expectedSize);
        });

        it('method addNode works correctly when tree have 2 nodes', () => {
            let test = new BST();
            let array = [1,2];
            test.init(array);
            const expectedSize = 3;
            
            const actual = test.addNode((5));

            assert.deepEqual(test.getSize(), expectedSize);
        });

        it('method addNode works correctly when tree have many nodes', () => {
            let test = new BST();
            let array = [10,2,6,4,8,9];
            test.init(array);
            const expectedSize = 7;
            
            const actual = test.addNode((5));

            assert.deepEqual(test.getSize(), expectedSize);
        });
    });
})