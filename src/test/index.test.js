const { assert } = require ('chai');
const getFactorial = require ('../Factorial');
const makeCounter = require ('../counter');
describe('getFactorial', () => {
    it('should be defined', () => {
        assert.isDefined(getFactorial, 'function has been defined')
    });
  
    it('should return Warning (undefined)', () => {
        const num = undefined;
        const expected = 'Wrong input!';

        const actual = getFactorial(num);

        assert.deepEqual(actual, expected);
    });

    it('should return Warning (null)', () => {
        const num = null;
        const expected = 'Wrong input!';

        const actual = getFactorial(num);

        assert.deepEqual(actual, expected);
    });

    it('should return Warning (")', () => {
        const num = ''; 
        const expected = 'Wrong input!';

        const actual = getFactorial(num);

        assert.deepEqual(actual, expected);
    });

    it('should return Warning (-2)', () => {
        const num = -2; 
        const expected = 'Wrong input!';

        const actual = getFactorial(num);

        assert.deepEqual(actual, expected);
    });

    it('should return Warning (-7)', () => {
        const num = -7; 
        const expected = 'Wrong input!';

        const actual = getFactorial(num);

        assert.deepEqual(actual, expected);
    });

    it('should return Factrorial (3)', () => {
        const num = 3; 
        const expected = 6;

        const actual = getFactorial(num);

        assert.deepEqual(actual, expected);
    });

    it('should return Factorial(0)', () => {
        const num = 1;
        const expected = 1;

        const actual = getFactorial(num);

        assert.deepEqual(actual, expected);
    });

    it('should return Factrorial (12)', () => {
        const num = 12; 
        const expected = 479001600;

        const actual = getFactorial(num);

        assert.deepEqual(actual, expected);
    });

    it('should return Factrorial (5)', () => {
        const num = 5; 
        const expected = 120;

        const actual = getFactorial(num);

        assert.deepEqual(actual, expected);
    });

    it('should return Factrorial (6)', () => {
        const num = 6; 
        const expected = 720;

        const actual = getFactorial(num);

        assert.deepEqual(actual, expected);
    });
});

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

    describe('BST method init', () => {
        it('method init defined', () => {
            let test = new BST();

            assert.isDefined(test.init);
        });

        it('method init works correctly', () => {
            let test = new BST();
            const array = [5, 6, 8];
            const expectedSize = 3;
            
            test.init(array);

            assert.deepEqual(test.getSize(), expectedSize);
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

    describe('BST method clear', () => {
        it('method clear defined', () => {
            let test = new BST();
            assert.isDefined(test.clear);
        });

        it('method clear works correctly when empty tree', () => {
            let test = new BST();
            const array = [];
            test.init(array);
            const expectedSize = 0;

            test.clear();

            assert.deepEqual(test.getSize(), expectedSize);
        });

        it('method clear works correctly when tree have 1 node', () => {
            let test = new BST();
            const array = [1];
            test.init(array);
            const expectedSize = 0;

            test.clear();

            assert.deepEqual(test.getSize(), expectedSize);
        });

        it('method clear works correctly when tree have 2 nodes', () => {
            let test = new BST();
            const array = [1, 2];
            test.init(array);
            const expectedSize = 0;

            test.clear();

            assert.deepEqual(test.getSize(), expectedSize);
        });

        it('method clear works correctly when tree have 3 nodes', () => {
            let test = new BST();
            const array = [4, 2, 6];
            test.init(array);
            const expectedSize = 0;

            test.clear();

            assert.deepEqual(test.getSize(), expectedSize);
        });

        it('method clear works correctly when tree have many nodes', () => {
            let test = new BST();
            const array = [10, 5, 6, 11, 45];
            test.init(array);
            const expectedSize = 0;

            test.clear();

            assert.deepEqual(test.getSize(), expectedSize);
        });
    });

    describe('BST metod getSize', () => {
        it('method getSize defined', () => {
            let test = new BST();
            
            assert.isDefined(test.getSize);
        });

        it('method getSize works correctly when empty tree', () => {
            let test = new BST();
            const array = [];
            test.init(array);
            const expectedSize = 0;

            const actual = test.getSize();

            assert.deepEqual(actual, expectedSize);
        });

        it('method getSize works correctly when tree have 1 node', () => {
            let test = new BST();
            const array = [5];
            test.init(array);
            const expectedSize = 1;

            const actual = test.getSize();

            assert.deepEqual(actual, expectedSize);
        });

        it('method getSize works correctly when tree have 2 nodes', () => {
            let test = new BST();
            const array = [2, 5];
            test.init(array);
            const expectedSize = 2;

            const actual = test.getSize();

            assert.deepEqual(actual, expectedSize);
        });

        it('method getSize works correctly when tree have 3 nodes', () => {
            let test = new BST();
            const array = [5, 4, 10];
            test.init(array);
            const expectedSize = 3;

            const actual = test.getSize();

            assert.deepEqual(actual, expectedSize);
        });

        it('method getSize works correctly when tree have many nodes', () => {
            let test = new BST();
            const array = [15, 23, 5, 6, 1];
            test.init(array);
            const expectedSize = 5;

            const actual = test.getSize();

            assert.deepEqual(actual, expectedSize);
        });
    });

    describe('BST method findnode', () => {
        it('method findNode defined', () => {
            let test = new BST();

            assert.isDefined(test.findNode);
        });

        it('method findNode works correctly when empty tree', () => {
            let test = new BST();
            const array = [];
            const expected = false;
            test.init(array);

            const actual = test.findNode(5);

            assert.deepEqual(actual, expected);
        });

        it('method findNode works correctly when tree have 1 node', () => {
            let test = new BST();
            const array = [1];
            const expected = true;
            test.init(array);

            const actual = test.findNode(1);

            assert.deepEqual(actual, expected);
        });

        it('method findNode works correctly when tree have 1 node, result = false', () => {
            let test = new BST();
            const array = [1];
            const expected = false;
            test.init(array);

            const actual = test.findNode(5);

            assert.deepEqual(actual, expected);
        });

        it('method findNode works correctly when tree have 2 nodes', () => {
            let test = new BST();
            const array = [1, 8];
            const expected = true;
            test.init(array);

            const actual = test.findNode(1);

            assert.deepEqual(actual, expected);
        });

        it('method findNode works correctly when tree have 2 nodes, result = false', () => {
            let test = new BST();
            const array = [1, 2];
            const expected = false;
            test.init(array);

            const actual = test.findNode(5);

            assert.deepEqual(actual, expected);
        });

        it('method findNode works correctly when tree have 3 nodes', () => {
            let test = new BST();
            const array = [5, 8, 4];
            const expected = true;
            test.init(array);

            const actual = test.findNode(5);

            assert.deepEqual(actual, expected);
        });

        it('method findNode works correctly when tree have 3 nodes, result = false', () => {
            let test = new BST();
            const array = [4, 5, 89];
            const expected = false;
            test.init(array);

            const actual = test.findNode(8);

            assert.deepEqual(actual, expected);
        });

        it('method findNode works correctly when tree have many nodes', () => {
            let test = new BST();
            const array = [5, 8, 4, 89, 56];
            const expected = true;
            test.init(array);

            const actual = test.findNode(56);

            assert.deepEqual(actual, expected);
        });

        it('method findNode works correctly when tree have many nodes, result = false', () => {
            let test = new BST();
            const array = [4, 5, 89, 56, 44, 2];
            const expected = false;
            test.init(array);

            const actual = test.findNode(8);

            assert.deepEqual(actual, expected);
        });
    });
})

const makeCounter = require ('../factorial');

describe('makeCounter', () => {
    it('function makeCounter defined', () => {
        assert.isDefined(makeCounter);
    });

    it('makeCounter works correctly', () => {
        let counter = makeCounter();
        const count = 1;
        const expected = 1;

        const actual = counter();

        assert.deepEqual(actual, expected);
    });
});
}); 