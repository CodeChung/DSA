const Memory = require('./memory')

//  Implement an Array class from scratch

class Array {
    constructor() {
        this.length = 0
        this.ptr = Memory.allocate(this.length)
    }
    push(val) {
        this._resize(this.length + 1)
        Memory.set(this.ptr + this.length, value)
        this.length++
    }
    _resize(size) {
        const oldPtr = this.ptr
        this.ptr = Memory.allocate(size)
        if (this.ptr === null) {
            throw new Error('Out of memory')
        }
        Memory.copy(this.ptr, oldPtr, this.length)
        Memory.free(oldPtr)
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error')
        }
        return Memory.get(this.ptr + index)
    }
    pop() {
        if (this.length == 0) {
            throw new Error('Index error')
        }
        const value = Memory.get(this.ptr + this.length - 1)
        this.length--
        return value
    }
    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error')
        }
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO)
        }

        Memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index)
        memory.set(this.ptr + index, value)
        this.length++
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error')
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1)
        this.length--
    }
}

Array.SIZE_RATIO = 3

function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);

    console.log(arr);
}

main()