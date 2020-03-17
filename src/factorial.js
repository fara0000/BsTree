// const getFactorial = (number) => {
//     if(!number || number < 0 ) return 'Wrong input!';
//     return (number === 1) ? 1 : number * getFactorial(number - 1);
// };
// module.exports = getFactorial;

const makeCounter = () => {
    let count = 1;
    return () => {
        return count++;
    };
};

module.exports = makeCounter;

let a = makeCounter();
console.log(a());
console.log(a());
console.log(a());

