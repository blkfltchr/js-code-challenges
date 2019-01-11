// A stack is a collection of items that obeys the principle of last in, first out.

function Stack() {

    // an array to hold our items
    let items = []

    return {

        // With push, we place new items at the end of the array.
        push(item) {
            items.push(item);
        },
        // With pop, we remove the final item from the array. 
        pop() {
            if (items.length) {
                return items.pop();
            }
            return null;
        },
        // With peep, we return the last item of the array. 
        peek() {
            if (items.length) {
                return items[items.length - 1];
            }
            return null;
        }

    }

}

// const lowerBodyStack = Stack()

// lowerBodyStack.push('underwear')
// lowerBodyStack.push('socks')
// lowerBodyStack.push('pants')
// lowerBodyStack.push('shoes')

// console.log(lowerBodyStack.peek()) // shoes
// lowerBodyStack.pop()
// console.log(lowerBodyStack.peek()) // pants
// lowerBodyStack.pop()
// console.log(lowerBodyStack.peek()) // socks

function MaxStack() {
    // We use two Stacks:
    // 1) to store all the values
    let stack = new Stack();
    // 2) to store our max values
    let maxValues = new Stack();

    return {

        push(item) {
            stack.push(item);
            // Check if the given item is larger than the latest max value
            if (!maxValues.peek() || item >= maxValues.peek()) {
                // add it to the stack of max values as the new max
                maxValues.push(item);
            }
        },

        pop() {
            const item = stack.pop();
            // check to see if the item we popped off is the current max
            if (item === maxValues.peek()) {
                // pop off the max Stack the previous max value in the Stack takes its place
                maxValues.pop();
            }

            return item;
        },

        getMax() {
            return maxValues.peek();
        }
    }
}


/* Some console.log tests */
const maxStack = new MaxStack();
console.log("First getMax - should print 'null': prints", maxStack.getMax());   // should print `null`

maxStack.push(1);
console.log("First getMax - should print 1: prints", maxStack.getMax());   // should print 1

maxStack.push(100);
console.log("First getMax - should print 100: prints", maxStack.getMax());   // should print 100

maxStack.pop();
console.log("First getMax - should print 1: prints", maxStack.getMax());   // should print 1