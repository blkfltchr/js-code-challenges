const { createQueue } = require('../queue/solution')

// A graph is a collection of nodes or vertices
// that may or may not point to other nodes.
// The connections are known as edges. 

function createNode(key) {
    // adjacent nodes are neighbors
    const neighbors = []
    // keys identitify newly created nodes
    return {
        key,
        neighbors,
        // the addNeighbor function pushes new nodes into our array
        addNeighbor(node) {
            neighbors.push(node)
        }

    }
}

function createGraph(directed = false) {
    // a graph is a collection of nodes and edges
    const nodes = []
    const edges = []
    return {
        // in order for two nodes to have symmetric edges they must be pointed at each other
        // in an undirected graph we assume the symmetry of edges
        directed,
        nodes,
        edges,
        
        addNode(key) {
            nodes.push(createNode(key))
        },

        getNode(key) {
            return nodes.find(node => node.key === key)
        },

        addEdge(node1key, node2key) {
            const node1 = this.getNode(node1key)
            const node2 = this.getNode(node2key)

            // the following happens whether or not the graph is directed
            node1.addNeighbor(node2)
            edges.push(`${node1key}-${node2key}`)

            if (!directed) {
                node2.addNeighbor(node1)
            }
        },
        // we want to visualize our graph by showing the nodes and neighbors in the console
        print() {
            // we'll return a string derived from our nodes
            return nodes.map(({ neighbors, key }) => {
                // the string will start with the key
                let result = key
                // if there are neighbors we'll map over them and concatenate them into our result
                if (neighbors.length) {
                    result += ` => ${neighbors
                        .map(node => node.key)
                        .join(' ')}`
                }

                return result
            })
            .join('\n')
        },

        // Breadth first search

        breadFirstSearch(startingNodeKey, visitFn) {
            const startingNode = this.getNode(startingNodeKey)
            const visited = nodes.reduce((acc, node) => {
              acc[node.key] = false
              return acc
            }, {})
            const queue = createQueue()
            queue.enqueue(startingNode)
      
            while (!queue.isEmpty()) {
              const currentNode = queue.dequeue()
      
              if (!visited[currentNode.key]) {
                visitFn(currentNode)
                visited[currentNode.key] = true
              }
      
              currentNode.neighbors.forEach(node => {
                if (!visited[node.key]) {
                  queue.enqueue(node)
                }
              })
            }
        },
    }
}


// const  graph = createGraph(true)

// graph.addNode('Husband')
// graph.addNode('Wife')
// graph.addNode('Cat')
// graph.addNode('Dog')

// graph.addEdge('Husband', 'Wife')
// graph.addEdge('Wife', 'Husband')
// graph.addEdge('Husband', 'Dog')
// graph.addEdge('Wife', 'Dog')
// graph.addEdge('Dog', 'Husband')
// graph.addEdge('Dog', 'Husband')
// graph.addEdge('Wife', 'Cat')

// console.log(graph.print())

const graph = createGraph(true)
const nodes = ['a', 'b', 'c', 'd', 'e', 'f']
const edges = [
  ['a', 'b'],
  ['a', 'e'],
  ['a', 'f'],
  ['b', 'd'],
  ['b', 'e'],
  ['c', 'b'],
  ['d', 'c'],
  ['d', 'e']
]

nodes.forEach(node => {
  graph.addNode(node)
})

edges.forEach(nodes => {
  graph.addEdge(...nodes)
})

graph.breadFirstSearch('a', node => {
  console.log(node.key)
})