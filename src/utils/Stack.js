class Stack {
    constructor() {
        this._array = [];
    }

    push(item) { return this._array.push(item); }

    pop() { return this._array.splice(this._array.length - 1, 1)[0]; }

    peek() { return this._array[this._array.length - 1]; }

    count() { return this._array.length; }

    empty() { return this._array = []; }
}

export default Stack;