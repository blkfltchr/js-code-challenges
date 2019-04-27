// A collection of items where each item has a connection (a link) to the next item in the list

// we create a node for each item with two properties
function createNode(value) {
    return {
        // (1) the value
        value,
        // (2) a next property which gets pointed to the next item in our list
        next: null
    }
}

// the list has several properties and methods
function createLinkedList() {
    return {
        // PROPERTIES
        head: null,
        tail: null,
        length: 0,
        // METHODS
        push(value) {
            const node = createNode(value)

            if (this.head === null) {
                this.head = node
                this.tail = node
                this.length++
                return node
            }
            // if the list has a length, the new node gets set to the tails next property
            this.tail.next = node

            // the tail becomes the node
            this.tail = node
            // the length increments by 1
            this.length++
        },
        pop() {
            if (this.isEmpty()) {
              return null
            }

            const node = this.tail
            // if the length is 1
            if (this.head === this.tail) {
                this.head = null
                this.tail = null
                this.length--
                return node
            }

            // we need to set the item before the tail as the new tail and the tail to null
            // the inefficiency of linked lists is that you have to start at the head and call next until you find the item you're looking for
            let current = this.head
            let penultimate
            while (current) {
                // when we know we have our penultimate (second to last)
                if (current.next === this.tail) {
                    penultimate = current
                    break
                }

                current = current.next
            }
            // make the last node null
            penultimate.next = null
            // make the second last node the tail
            this.tail = penultimate
            // decrement the length
            this.length--

            return node
        },
        get(index) {
            if (index < 0 || index > this.length) {
                return null
            }

            if (index === 0) {
                return this.head
            }

            let current = this.head
            let i = 0
            while (i < index) {
                i++
                current = current.next
            }

            return current
        },
        delete(index) {
            if (index < 0 || index > this.length) {
                return null
            }

            if (index === 0) {
                // delete the head but first store it as a variable 
                const deleted = this.head
                // make the current head's next the new head
                this.head = this.head.next
                this.length--
                return deleted
            }

            let current = this.head
            // a deletion in a linked list is taking the previous' next property and pointing it to the current's next property
            let previous
            let i = 0
            while (i < index) {
                i++
                previous = current
                current = current.next
            }

            const deleted = current
            previous.next = current.next
            this.length--
            return deleted
        },
        isEmpty() {
            return this.length === 0
        },
        print() {
            const value = []
            let current = this.head

            while (current) {
                values.push(current.value)
                current = current.next
            }

            return values.join(' => ')
        }
    }
}

const list = createLinkedList()
const values = ['a', 'b', 'c', 'd', 'e']
const nodes = values.map(val => list.push(val))

console.log(list.isEmpty())
// false
list.pop()
console.log(list.tail.value)
// d
console.log(list.delete(1))
// { value: 'b',
//  next: { value: 'c', next: { value: 'd', next: null } } }