class Stack {
    constructor() {
        this.__array = [];
    }

    push(item) { return this.__array.push(item); }

    pop() { return this.__array.splice(this.__array.length - 1, 1)[0]; }

    peek() { return this.__array[this.__array.length - 1]; }

    count() { return this.__array.length; }

    empty() { return this.__array = []; }
}

export default Stack;