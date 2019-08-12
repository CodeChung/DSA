// hen write a linked list class and its core functions (insertFirst, insertLast, remove, find) from scratch.

class _Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item)
        }
        else {
            let tempNode = this.head
            while (tempNode.next !== null) {
                tempNode = tempNode.next
            }
            tempNode.next = new _Node(item, null)
        }
    }
    find(item) {
        let currentNode = this.head
        if (!this.head) {
            return null
        }

        while (currentNode.value !== item) {
            if (currentNode.next === null) {
                return null
            } else {
                currentNode = currentNode.next
            }
        }
        return currentNode
    }
    remove(item) {
        if (!this.head) {
            return null
        }
        if (this.head.value === item) {
            this.head = this.head.next
        }
        let currentNode = this.head
        let previousNode = this.head

        while ((currentNode !== null) && (currentNode.value !== item)) {
            previousNode = currentNode
            currentNode = currentNode.next
        }
        if (currentNode === null) {
            console.log('Item not found')
            return
        }
        previousNode.next = currentNode.next
    }
    insertBefore(key, item) {
        if (!this.head) {
            this.insertFirst(item)
        }
        let curr = this.head
        let prev = this.head
        while ((curr !== null) && (curr.value !== key)) {
            prev = curr
            curr = curr.next
        }
        if (curr === null) {
            console.log('key not found')
            prev.next = new _Node(item, null)
        }
        prev.next = new _Node(item, curr)
    }
    insertAfter(key, item) {
        if (!this.head) {
            this.insertFirst(item)
        }
        let prev = this.head
        let curr = this.head
        while ((curr !== null) && (prev.value !== key)) {
            prev = curr
            curr = curr.next
        }
        if (curr === null) {
            prev.next = new _Node(item, null)
        }
        prev.next = new _Node(item, curr)
    }
    insertAt(index, item) {
        let curr = this.head
        if (index == 0) {
            this.insertFirst(item)
        }
        for (let i = 0; i < index - 1; i++) {
            if (!curr) {
                console.log('past length of list')
                return 
            }
            curr = curr.next
        }
        curr.next = new _Node(item, curr.next)
    }
    log() {
        let curr = this.head
    }
}

function display(list) {
    let curr = list.head
    while (curr) {
        console.log(curr.value)
        curr = curr.next
    }
}

function size(list) {
    if (!list.head) {
        return 0
    }
    let curr = list.head
    let count = 0
    while (curr) {
        curr = curr.next
        count++
    }
    console.log(count)
}

function isEmpty(list) {
    console.log(Boolean(!list.head))
}

function findPrevious(list, item) {
    if (item == list.head.value) {
        console.log('this is first item on list dawg')
        return
    }
    let curr = list.head
    while (curr.next) {
        if (curr.next.value == item) {
            console.log(curr.value)
            return
        } 
        curr = curr.next
    }
    console.log('item not on list')
    return
}

function findLast(list) {
    let curr = list.head
    while (curr.next) {
        curr = curr.next
    }
    console.log(curr.value)
}

function reverse(list) {
    if (!list.head) {
        return null
    }
    let curr = list.head
    let next = list.head.next
    curr.next = null
    while (next) {
        let mid = next.next
        next.next = curr
        curr = next
        next = mid
    }
    list.head = curr
}

function thirdFromEnd(list) {
    if (!list.head || !list.head.next || !list.head.next.next) {
        return null
    }
    let curr = list.head
    while (curr.next.next.next) {
        curr = curr.next
    }
    console.log(curr.value)
}

function middleList(list) {
    if (!list) {
        return null
    }
    let curr = list.head
    let nxt = list.head
    while (nxt && nxt.next) {
        curr = curr.next
        nxt = nxt.next.next
    }
    console.log(curr.value)
}

function listCycle(list) {
    let curr = list.head
    let nxt = list.head
    if (!curr || !curr.next) {
        return false
    }
    curr = curr.next
    nxt = nxt.next.next
    while (nxt & nxt.next) {
        if (curr == nxt) {
            return true
        }
    }
    return false
}

function sortList(list) {
    
}

function main() {
    let list = new LinkedList()
    list.insertFirst('Starbuck')
    list.insertFirst('Husker')
    list.insertFirst('Helo')
    list.insertFirst('Boomer')
    list.insertFirst('Apollo')
    list.insertLast('Tauhida')
    list.remove('squirrel')
    list.insertBefore('Boomer', 'Athena')
    list.insertAfter('Helo', 'Hotdog')
    list.insertAt(2, 'Kat')
    list.remove('Tauhida')
    display(list)
    size(list)
    isEmpty(list)
    findPrevious(list, 'Apollo')
    findLast(list)
    reverse(list)
    display(list)
    thirdFromEnd(list)
    middleList(list)
}

main()

/*
    Mystery Program:
    -this removes duplicates
    -time complexity: O(n^2)
    */