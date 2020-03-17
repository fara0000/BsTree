const makeCounter = () => {
    let count = 1;
    return () => {
        return count++;
    };
}

module.exports = makeCounter;
