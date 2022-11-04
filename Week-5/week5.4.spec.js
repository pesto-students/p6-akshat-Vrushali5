const mathOperations = require("./week5.4")

test('two plus two should be four', () => {
    expect(mathOperations.sum(2,2)).toBe(4);
});

test('two minus two should be zero', () => {
    expect(mathOperations.diff(2,2)).toBe(0);
});

test('two multiply by two should be four', () => {
    expect(mathOperations.product(2,2)).toBe(4);
});