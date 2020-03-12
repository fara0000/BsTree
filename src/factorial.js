function Factorial(number) {
    this.number = number
}
Factorial.prototype.getFactorial = function (number) {
    if(!number || this.number < 0 || {}) return 'Wrong input!'
    return (number === 1) ? 1 : number * Factorial.prototype.getFactorial (number - 1);
}

const test = new Factorial();
console.log(test.getFactorial(7));

module.exports = Factorial;