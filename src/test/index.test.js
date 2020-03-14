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

describe('makeCounter', () => {
    it('function makeCounter defined', () => {
        assert.isDefined(makeCounter);
    });

    it('makeCounter works correctly', () => {
        const count = 1;
        const expected = 1;

        const actual = counter();

        assert.deepEqual(actual, expected);
    });
});