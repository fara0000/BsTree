<<<<<<< HEAD
const { assert } = require ('chai');
const getFactorial = require ('../Factorial');
describe('getFactorial', () => {
    
    it('should be defined', () => {
        assert.isDefined(getFactorial, 'function has been defined')
    });

=======
const { assert } = require('chai');
const Factorial = require('../Factorial')
describe('getFactorial', () => {
    it('should be defined', () => {
        assert.isDefined(Factorial, 'function has been defined')
    });
>>>>>>> 3d7b796c176ae4c342aa864a3c8a3b848ebfdecd
    it('should return Warning (undefined)', () => {
        const num = undefined;
        const expected = 'Wrong input!';

        const actual = getFactorial(num);

        assert.deepEqual(actual, expected);
    });
<<<<<<< HEAD

=======
    
>>>>>>> 3d7b796c176ae4c342aa864a3c8a3b848ebfdecd
    it('should return Warning (null)', () => {
        const num = null;
        const expected = 'Wrong input!';

        const actual = getFactorial(num);

        assert.deepEqual(actual, expected);
    });

<<<<<<< HEAD
=======
    it('should return Warning ([])', () => {
        const num = [];
        const expected = 'Wrong input!';

        const actual = getFactorial(num);

        assert.deepEqual(actual, expected);
    });

    it('should return Warning ({})', () => {
        const num = {};
        const expected = 'Wrong input!';

        const actual = getFactorial(num);

        assert.deepEqual(actual, expected);
    });

>>>>>>> 3d7b796c176ae4c342aa864a3c8a3b848ebfdecd
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
<<<<<<< HEAD

=======
    
>>>>>>> 3d7b796c176ae4c342aa864a3c8a3b848ebfdecd
    it('should return Factrorial (6)', () => {
        const num = 6; 
        const expected = 720;

        const actual = getFactorial(num);

        assert.deepEqual(actual, expected);
    });
<<<<<<< HEAD
}); 
=======
});
>>>>>>> 3d7b796c176ae4c342aa864a3c8a3b848ebfdecd
