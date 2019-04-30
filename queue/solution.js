// A queue is a collection of items that obeys the principle of first-in/first-out. 
// When we place an item into the queue, we can only get it out 
// after all the other items that have been added before it have been removed.

function createQueue() {
    const queue = []

    return {
        // First in - adding items to the front of the array with enqueue
        enqueue(item) {
            queue.unshift(item)
        },
        // First out - removing the final item of the array
        dequeue(item) {
            queue.pop()
        },
        // Return the final item (the next to be removed)
        peek() {
            return queue[queue.length - 1]
        },
        // Using a getter function to always return the current length
        get length() {
            return queue.length
        },
        isEmpty() {
            return queue.length === 0
        }
    }
}

// const q = createQueue()
// console.log(q.isEmpty())
// // true

// q.enqueue('Study data structures')
// q.enqueue('Explain them to someone who is unfamiliar with the topic')
// q.enqueue('Identify gaps in my understanding')
// q.enqueue('Review and simplify')
// console.log(q.peek())
// // Study data structures

// q.dequeue()
// console.log(q.peek())
// // Explain them to someone who is unfamiliar with the topic

// q.dequeue()
// console.log(q.peek())
// // Identify gaps in my understanding

// console.log(q.isEmpty())
// // false

// q.dequeue()
// console.log(q.peek())
// // Review and simplify

// q.dequeue()
// console.log(q.isEmpty())
// // true

exports.createQueue = createQueue
