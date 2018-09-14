 class Stack {

  constructor(){
  };
  

  isEmpty() {
    return true;
  };

  push(value) {
    this.value = value;
  }

  top() {
    return this.value;
  }

;}

module.exports = Stack;