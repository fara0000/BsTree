function doCounter () {
    let firstCounter = 1;

    return function () {
        return firstCounter++;
    };
};
let a;

a = doCounter(); 
console.log(a());
console.log(a());
console.log(a());
console.log(a());
console.log(a());
let b = doCounter();
console.log(b());
console.log(b());
console.log(b());