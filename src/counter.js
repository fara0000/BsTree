const makeCounter = () => {
    let count = 1;
    return () => {
        return count++;
    };
}

let counter = makeCounter();

module.exports = makeCounter;
