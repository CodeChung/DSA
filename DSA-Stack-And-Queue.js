class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }
    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null)
            return this.top
        }
        const node = new _Node(data, this.top)
        this.top = node
    }
    pop() {
        const node = this.top
        this.top = node.next
        return node.data
    }
}

function peek(stack) {
    return stack.top.data
}

function isEmpty(stack) {
    return Boolean(stack.top)
}

function display(stack) {
    let curr = stack.top
    while (curr) {
        console.log(curr.data)
        curr = curr.next
    }
}

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
    sArr = s.split('')
    let stack = new Stack()

    sArr.forEach(letter => stack.push(letter))

    let reverse = []
    for (let i = 0; i < s.length; i++) {
        reverse[i] = stack.pop()
    }

    return sArr.toString() === reverse.toString()
}

function parentheses(expr) {
    let stack = new Stack()
    for (let i = 0; i < expr.length; i++) {
        stack.push(expr[i])
    }
    let count = 0
    while (stack) {
        if (count < 0) {
            return false
        }
        if (stack.data === '(') {
            count++
        }
        if (stack.data === ')') {
            count--
        }
    }
    return Boolean(count === 0)
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
    }
    enqueue(data) {
        const node = new _Node(data)
        if (this.first === null) {
            this.first = node
        }
        if (this.last) {
            this.last.next = node
        }
        this.last = node
    }
    dequeue() {
        if (this.first === null) {
            return
        }
        const node = this.first
        this.first = this.first.next
        if (node === this.last) {
            this.last = null
        }
        return node.value
    }
}

function peek(q) {
    return q.first.data
}
function isEmpty(q) {
    return Boolean(q.first)
}
function display(q) {
    let curr = q.first
    while (curr) {
        console.log(curr.data)
        curr = curr.next
    }
}

const starTrek = new Stack;

starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');

// console.log(starTrek);

starTrek.peek();

const starTrekQ = new Queue;

starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');
