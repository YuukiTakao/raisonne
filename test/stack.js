 class Stack {
  
  constructor(){
    this.stackSize = 0;
  }

  isEmpty() {
    return this.stackSize === 0;
  }

  push(value) {
    this.value = value;
    this.stackSize++;
  }

  top() {
    return this.value;
  }

  size() {
    return this.stackSize;
  }
   
  pop() {
    throw new Error('Yeah');
  }
}

module.exports = Stack;