const getFactorial = (number) => {
    if(!number || number < 0 ) return 'Wrong input!';
    return (number === 1) ? 1 : number * getFactorial(number - 1);
};
module.exports = getFactorial;