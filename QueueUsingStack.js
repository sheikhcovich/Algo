var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

MyQueue.prototype.push = function (x) {
  this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.stack2.length) return this.stack2.pop();
  else while (this.stack1.length) this.stack2.push(this.stack1.pop());
  return this.stack2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.stack2.length) return this.stack2[this.stack2.length - 1];
  else while (this.stack1.length) this.stack2.push(this.stack1.pop());
  return this.stack2[this.stack2.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack2.length || this.stack1.length ? false : true;
};

let queue = new MyQueue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.pop(3);
console.log(queue.peek());
