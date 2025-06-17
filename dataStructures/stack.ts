class Stack<T> {
  size: number;
  private storage: {
    [key: number]: T
  }

  constructor() {
    this.size = 0
    this.storage = {}
  }

  push(val: T) {
    this.storage[this.size] = val
    this.size++
  }

  pop() {
    if(this.size === 0) return undefined;
    this.size--
    const result = this.storage[this.size]
    delete this.storage[this.size]
    return result
  }

  peek() {
    if(this.size === 0) return undefined;
    return this.storage[this.size -1]
  }
}

const myStack = new Stack<string | number>()

myStack.push(1)
myStack.push(2)
myStack.push(3)
console.log(myStack.peek())
console.log("size: ", myStack.size)
console.log(myStack.pop())
console.log("size: ", myStack.size)
console.log(myStack.peek())
