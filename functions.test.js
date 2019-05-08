let functions = require('./functions.js');

test('returnTwo() should return 2.', () => {
    expect(functions.returnTwo()).toEqual(2);
});

test('greeting should return a dynamic greeting.', () => {
    expect(functions.greeting('James')).toEqual('Hello, James.');
    expect(functions.greeting('Jill')).toEqual('Hello, Jill.');
});

describe('Math functions:', () => {
    test('add() should return a sum of two numbers.', () => {
        expect(functions.add(1,2)).toEqual(3);
        expect(functions.add(5,9)).toEqual(14);
    });
    
    test('multiply() should return a product of two numbers.', () => {
        expect(functions.multiply(1,2)).toEqual(2);
        expect(functions.multiply(5,3)).toEqual(15);
    });
    
    test('divide() should return a division of two numbers.', () => {
        expect(functions.multiply(2,1)).toEqual(2);
        expect(functions.multiply(15,3)).toEqual(45);
    });
    
    test('subtract() should return a remainder of two numbers.', () => {
        expect(functions.subtract(2,1)).toEqual(1);
        expect(functions.subtract(15,3)).toEqual(12);
    });
});
