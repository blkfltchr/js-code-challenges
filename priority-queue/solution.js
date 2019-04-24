// We can make a priority queue by making two queues:
// a high priority queue and a low priority queue together.

const { createQueue } = require('../queue/solution');

function createPriorityQueue() {
    const lowPriorityQueue = createQueue()
    const highPriorityQueue = createQueue()

    return {
        // enqueue receives a second argument to indicate whether an item isHighPriority
        enqueue(item, isHighPriority = false) {
            isHighPriority ? highPriorityQueue.enqueue(item) : lowPriorityQueue.enqueue(item)
        },
        // dequeue makes sure highPriorityQueue isEmpty before it dequeues from the lowPriorityQueue
        dequeue() {
            if(!highPriorityQueue.isEmpty()) {
                return highPriorityQueue.dequeue()
            }
    
            return lowPriorityQueue.dequeue()
        },
        // peek
        peek() {
            if(!highPriorityQueue.isEmpty()) {
                return highPriorityQueue.peek()
            }
    
            return lowPriorityQueue.peek()
        },
        // length
        length() {
            return highPriorityQueue.length + lowPriorityQueue.length
        },
        // isEmpty
        isEmpty() {
            return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty()
        }
    }
}

const q = createPriorityQueue()
console.log(q.isEmpty())
// true

q.enqueue('Study data structures')
q.enqueue('Complete hackerrank warmup challenges')
console.log(q.peek())

q.dequeue()
console.log(q.peek())

q.enqueue('Understand queue data structure inside and out', true)
console.log(q.peek())
q.dequeue()
console.log(q.peek())