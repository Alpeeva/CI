var summarize = function (a) {
    return function (b) {
        return a + b;
    };
};

console.log(summarize(5)(3));

var multiply = function (a) {
    return function (b) {
        return a * b;
    };
};

console.log(multiply(5)(3));
