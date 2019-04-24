// A Stack is a collection of items that obeys the principle last in, first out (LIFO)

function createStack() {
    const array = []

    return {
        push(item) {
            array.push(item)
        },
        pop() {
            return array.pop()
        },
        peek() {
            return array[array.length - 1]
        },
        get length() {
            return array.length
        },
        isEmpty() {
            return array.length === 0
        }
    }
}

const lowerBodyStack = createStack()

lowerBodyStack.push('underwear')
lowerBodyStack.push('pants')
lowerBodyStack.push('socks')
lowerBodyStack.push('shoes')

console.log(lowerBodyStack.peek())
// shoes

lowerBodyStack.pop()
console.log(lowerBodyStack.peek())
// socks

lowerBodyStack.pop()
lowerBodyStack.pop()
console.log(lowerBodyStack.length)
// 1