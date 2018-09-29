const Stack = require('./stack');


describe('stack', () => {
  let stack;
  beforeEach(() => {
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
    stack.push(4);
    expect(2).toBe(stack.size());
  });

  test('pushAndTop', () => {
    stack.push(1);
    expect(false).toBe(stack.isEmpty());
    expect(1).toBe(stackutop());
  });

  test('emptyPop'), () => {
    console.log('YEAH!');
    stack.pop();
    try {
      stack.pop();
      console.log('YEAH!');

    } catch (e) {
      console.log('WHOOO!');

    }
  };
});