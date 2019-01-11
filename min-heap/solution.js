// Min Heap

// You can think of a heap as something like a binary search tree where each node has 
// at least 2 child nodes. For a min heap, the parent nodes are less than their two 
// children. The order on every level of the heap doesn’t matter, what does matter is 
// that each level is filled from leftChild to rightChild.

// It helps to use arrays to implement min heap. Here you can see our heap represented 
// as an array:

// [10, 14, 19, 26, 31, 42, 27, 44, 35, 33]

// [ 1,  2,  3,  4,  5,  6,  7,  8,  9, 10]

// If the parent node is `i`, the leftChild child is `i * 2` and the rightChild child 
// is `i * 2 + 1`

// 26 is the parent, 44 is its leftChild child and 35 is its rightChild child.

// To make this work, you’ve got to make `index[0] = null`

// The equation to find the parent is `parent = floor(i / 2)`

// To visualize a MinHeap, I found this link: 
// https://www.cs.usfca.edu/~galles/visualization/Heap.html

// When you insert a number that is smaller than the parent nodes, here is what happens

// Basically, it goes to the end of the heap, and it checks its parents one by one, to 
// see where it belongs.

// When you delete the smallest node, index[1] is deleted, the last node is popped to 
// index[1] and then the heap sorts the remaining nodes by checking parent against 
// children to see which is bigger.


function MinHeap() {

	// initialize an array where index[0] = null
	let heap = [null];

	return {

		// insert a number
		insert(num) {
			// push it to the back of the array 
			heap.push(num);
			// check that the heap is more than 2
			if (heap.length > 2) {
				// create an index for the inserted number
				let index = heap.length - 1;
				// start a check as long the newly inserted index 
				// is less than its parent (see the parent equation above)
				while (heap[index] < heap[Math.floor(index / 2)]) {
					// make sure the function stops when you reach the root node
					if (index >= 1) {
						// es6 syntax to switch the parent node with its child
						[heap[Math.floor(index / 2)], heap[index]] = [heap[index], heap[Math.floor(index / 2)]];
						// make sure the parent is not the first node
						if (Math.floor(index / 2) > 1) {
							// set the index to the parent node
							index = Math.floor(index / 2);
						} else {
							// end the while loop with a break
							break;
						};
					};
				};
			};
		},

		delete() {
			// the node we want to delete is the smallest and therefore the first node
			let smallest = heap[1];
			// if we have more than one node
			if (heap.length > 2) {
				// the last node becomes the first node
				heap[1] = heap[heap.length - 1];
				// shorten the array by one
				heap.splice(heap.length - 1);
				// if there are only three items in the array
				if (heap.length == 3) {
					// and node one is bigger than node two
					if (heap[1] > heap[2]) {
						// es6 syntax to switch them
						[heap[1], heap[2]] = [heap[2], heap[1]];
					};
					return smallest;
				};
				let root = 1;
				let leftChild = 2 * root;
				let rightChild = leftChild + 1;
				// while the root node is great than its left or right child, we will do 
				// the following (move it down to its appropriate spot)
				while (heap[root] >= heap[leftChild] || heap[root] >= heap[rightChild]) {
					// if the left node is greater than the right node
					if (heap[leftChild] < heap[rightChild]) {
						// we’ll switch the root node with the left node
						[heap[root], heap[leftChild]] = [heap[leftChild], heap[root]];
						// and set the index to the left node
						root = 2 * i
						// if the left node isn’t greater than the right node
					} else {
						// we’ll switch the root node with the right node
						[heap[root], heap[rightChild]] = [heap[rightChild], heap[root]];
						// and set the index to the right node
						root = 2 * root + 1;
					};
					// either way, we’ve got to set the new left and right node
					leftChild = 2 * root;
					rightChild = leftChild + 1;
					// when either child is undefined, we’ve reached the bottom of the tree
					if (heap[leftChild] == undefined || heap[rightChild] == undefined) {
						// time to break the while loop
						break;
					};
				};
				// if there’s only one node
			} else if (heap.length == 2) {
				// we’ll delete it
				heap.splice(1, 1);
				// if there are no nodes, we’ll return null
			} else {
				return null;
			};
			return smallest;
		},

		getMin() {
			return heap[1];
		}
	}
};

const heap = new MinHeap();
console.log("First getMin - should print 'undefined': prints", heap.getMin());

heap.insert(5);
console.log("Second getMin - should print 5: prints", heap.getMin());

heap.insert(100);
console.log("Third getMin - should print 5: prints", heap.getMin());

heap.insert(2);
console.log("Fourth getMin - should print 2: prints", heap.getMin());

console.log("First delete - should print 2: prints", heap.delete());
console.log("Second delete - should print 5: prints", heap.delete());
console.log("Third delete - should print 100: prints", heap.delete());

console.log("Fifth getMin - should print 'undefined': prints", heap.getMin());