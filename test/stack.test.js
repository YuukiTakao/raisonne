const Stack = require('./stack');


describe('stack', () => {
  let stack;
  beforeAll(() => {
    stack = new Stack();
  });

  test('isEmpty', () => {
    expect(stack.isEmpty()).toBeTruthy();
  });

  test('pushAndTop', () => {
    stack.push(1);
    expect(1).toBe(stack.top());
  });

  test('pushAndSize', () => {
    stack.push(1);
    expect(1).toBe(stack.size());
  });
})