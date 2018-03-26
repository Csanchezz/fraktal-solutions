import { add, multiply } from 'main';


test('should add two numbers', () => {
    const result = add(1, 2);
    expect(result).toEqual(3);
});

test('should multiply two numbers', () => {
    const result = add(3, 10);
    expect(result).toEqual(30);
});